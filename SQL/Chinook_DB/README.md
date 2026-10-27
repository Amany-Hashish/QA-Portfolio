<div dir="ltr">

# 🗄️ Chinook Database QA & Data Integrity Suite

A professional, SQL-driven Database QA Suite designed to validate **Schema Integrity**, **Data Quality**, and **Referential Integrity** for the relational Chinook Database (SQLite).

---

## 📌 Project Overview
This repository contains organized SQL test suites. It validates global database schema constraints (Primary Keys & Foreign Keys) as well as table-specific business rules and boundary conditions.

---

## 🏗️ File Structure & Execution Order

```text
chinook-database-qa-suite/
│
├── 00_Chinook_DB_Tests.sql  # Database-Wide Schema Health Checks (Global PK & FK Audits)
├── 01_Customer_Tests.sql    # Customer Domain Validation (Data Quality & Email Formats)
├── 02_Invoice_Tests.sql     # Invoice Domain Validation (Financial Bounds & Date Logic)
├── .gitignore               # Ignored system files
└── README.md                # Project Documentation



## 📊 Test Suites Breakdown
### 1. Customer Domain Suite (`01_Customer_Tests.sql`)
* **Validate Mandatory Field Constraint on Customer Names:** Ensures essential name fields (`FirstName`, `LastName`) are not null or empty.
* **Validate Email Uniqueness Constraint:** Verifies that no duplicate email addresses exist across customer records.
* **Validate Email Syntax and Formatting:** Checks that customer emails follow standard structure and valid email formats.
* **Validate Customer Support Rep Foreign Key Integrity:** Guarantees that `SupportRepId` correctly maps to valid Employee records.
* **Validate Email Whitespace Cleanliness (Using TRIM):** Detects leading or trailing spaces in email fields that could cause authentication or data issues.
* **Validate Minimum Address Length:** Ensures customer address entries meet basic structural length requirements.

### 2. Invoice Domain Suite (02_Invoice_Tests.sql)
* **Validate Invoice Total Calculation Accuracy:** Ensures that the calculated `Total` amount accurately reflects the sum of its associated line items (`InvoiceLine`).
* **Validate Positive Invoice Total:** Verifies that no invoice total contains a negative or zero balance (`Total > 0`).
* **Validate Invoice Date Non-Future Boundary:** Checks that invoice transaction dates (`InvoiceDate`) are logically valid and do not contain future-dated timestamps.


## 🚀 How to Run the Test Suites
Open the Chinook SQLite Database using DBeaver or any preferred SQL editor.

Run 00_Chinook_DB_Tests.sql first to conduct a full schema integrity check.

Execute table-specific test suites (01_Customer_Tests.sql, 02_Invoice_Tests.sql).

Expected Result: Negative / Boundary checks should return 0 rows, confirming no corrupted data exists.

## 🚧 Roadmap

[x] Customer Table Test Suite (01_Customer_Tests.sql)

[x] Invoice Table Test Suite (02_Invoice_Tests.sql)

[ ] InvoiceLine Domain Validation (Planned)

[ ] Album & Artist Domain Suites (Planned)

##👤 Author
Developed as part of an Automated Database Quality Assurance Portfolio.
