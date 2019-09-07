import app from "./app";


async function main() {
    const PORT = app.get('port');
    await app.listen(PORT);
    console.log(`Server on port ${PORT}`);
}

main();
