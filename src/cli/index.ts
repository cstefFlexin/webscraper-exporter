#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as init from "./commands/init.js";
import * as start from "./commands/start.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

yargs(hideBin(process.argv))
    .scriptName("wsce")
    .version(
        "v" + JSON.parse(readFileSync(join(__dirname, "../..", "package.json"), "utf8")).version
    )
    .help()
    .alias("h", "help")
    .command(init as any)
    .command(start as any)
    .demandCommand()
    .detectLocale(false).argv;
