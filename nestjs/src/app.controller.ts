import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  root() {
    return { service: "orbit-nestjs-starter", status: "ok" };
  }

  @Get("health")
  health() {
    return "ok";
  }
}
