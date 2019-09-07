import app from "./app";
import { startConnectionToMongoDb } from "./database";


async function main() {
    startConnectionToMongoDb();
    const PORT = app.get('port');
    await app.listen(PORT);
    console.log(`Server on port ${PORT}`);
}

main();
