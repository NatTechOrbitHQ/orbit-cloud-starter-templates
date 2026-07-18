use std::env;
use tiny_http::{Header, Response, Server};

fn main() {
    let port = env::var("PORT").unwrap_or_else(|_| "3000".to_string());
    let server = Server::http(format!("0.0.0.0:{port}")).expect("failed to bind");
    println!("listening on {port}");
    for request in server.incoming_requests() {
        let response = match request.url() {
            "/health" => Response::from_string("ok"),
            _ => Response::from_string(r#"{"service":"orbit-rust-starter","status":"ok"}"#)
                .with_header(Header::from_bytes("Content-Type", "application/json").unwrap()),
        };
        let _ = request.respond(response);
    }
}
