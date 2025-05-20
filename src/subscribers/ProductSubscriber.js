const fs = require("fs");
const path = require("path");
const { EventSubscriber, EntitySubscriberInterface, UpdateEvent } = require("typeorm");
const auditLogPath = path.join(__dirname, "..", "logs", "audit.log");

@EventSubscriber()
class ProductSubscriber {
    listenTo() {
        return "Product"; // Dinlenecek entity
    }

    beforeUpdate(event) {
        const oldValues = event.databaseEntity;
        const newValues = event.entity;

        const logMessage = `${new Date().toLocaleString()} - Kullanıcı (${event.queryRunner.data.user?.name || "Bilinmiyor"}) ` +
            `(${event.queryRunner.data.user?.id || "Bilinmiyor"}) ürünü güncelledi. ` +
            `Eski değer: ${JSON.stringify(oldValues)}, Yeni değer: ${JSON.stringify(newValues)}\n`;

        fs.appendFileSync(auditLogPath, logMessage, "utf8");
    }
}

module.exports = ProductSubscriber;
