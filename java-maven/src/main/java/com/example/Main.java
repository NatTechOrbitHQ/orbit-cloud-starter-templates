package com.example;

import com.sun.net.httpserver.HttpServer;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;

public class Main {
    public static void main(String[] args) throws Exception {
        int port = Integer.parseInt(System.getenv().getOrDefault("PORT", "3000"));
        HttpServer server = HttpServer.create(new InetSocketAddress("0.0.0.0", port), 0);
        server.createContext("/health", exchange -> respond(exchange, 200, "ok", "text/plain"));
        server.createContext("/", exchange ->
            respond(exchange, 200, "{\"service\":\"orbit-java-starter\",\"status\":\"ok\"}", "application/json"));
        server.start();
        System.out.println("listening on " + port);
    }

    private static void respond(com.sun.net.httpserver.HttpExchange exchange, int status, String body, String contentType) throws java.io.IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", contentType);
        exchange.sendResponseHeaders(status, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }
}
