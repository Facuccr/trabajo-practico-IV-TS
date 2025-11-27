//tipos Literales
let orderStatus: "pending" | "shipped" | "delivered";
orderStatus = "shipped";
console.log("orderStatus:", orderStatus);

//enum
enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string): void {
  console.log(`[${level}] ${message}`);
}

//pruebas
logMessage(LogLevel.Info, "Operación realizada correctamente.");
logMessage(LogLevel.Warning, "Stock bajo.");
logMessage(LogLevel.Error, "No se pudo actualizar el precio.");
