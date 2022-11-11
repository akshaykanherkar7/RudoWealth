#!/usr/bin/env node
const program = require("commander");
const { listCustomers } = require("./index");

program.version("1.0.0").alias("v").description("Client Management System");
program.help(`
Function                  Alias        Description
version                   v            To check the version of the customer-cli
client-cli list           l            To check all the customes in the database
`);

// List Command
program
  .command("list")
  .alias("l")
  .description("List all customers")
  .action(() => listCustomers());

program.parse(process.argv);
