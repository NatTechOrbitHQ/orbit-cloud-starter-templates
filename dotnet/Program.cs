var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var port = Environment.GetEnvironmentVariable("PORT") ?? "3000";
app.Urls.Add($"http://0.0.0.0:{port}");

app.MapGet("/", () => Results.Json(new { service = "orbit-dotnet-starter", status = "ok" }));
app.MapGet("/health", () => Results.Text("ok"));

app.Run();
