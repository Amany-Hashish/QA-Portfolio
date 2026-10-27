SELECT * from Invoice i ;
SELECT * from InvoiceLine il ;
/*
===============================================================================
TEST CASE ID          : INV-TC001
TEST NAME             : Validate Invoice Total Calculation Accuracy
TEST TYPE             : Negative Scenario (Boundary / Null Check)
TARGET TABLE          : Invoice 
DESCRIPTION           : Verify that the stored 'Total' amount matches the aggregated 
                        sum of (UnitPrice * Quantity) from the InvoiceLine table for each invoice.
NOTE                  : ROUND(..., 2) is explicitly used to avoid false failures 
                        caused by floating-point arithmetic precision issues.
EXPECTED RESULT       : 0 rows returned.
===============================================================================
*/

SELECT 
    i.InvoiceId, 
    i.Total AS Invoice_Total, 
    SUM(il.UnitPrice * il.Quantity) AS Calculated_Total
FROM Invoice i
JOIN InvoiceLine il ON i.InvoiceId = il.InvoiceId
GROUP BY i.InvoiceId
HAVING i.Total <> Round (SUM (il.UnitPrice * il.Quantity),2);

/*
===============================================================================
TEST CASE ID        : INV-TC002
TEST NAME           : Validate Positive Invoice Total
TEST TYPE           : Negative Scenario (Boundary / Value Check)
TARGET TABLE        : Invoice
DESCRIPTION         : Verify that all invoices have a total amount strictly 
                      greater than zero to prevent invalid financial records.
EXPECTED RESULT     : 0 rows returned (No zero or negative total invoices).
===============================================================================
*/

SELECT InvoiceId, CustomerId, InvoiceDate, Total
FROM Invoice
WHERE Total <= 0;

/*
===============================================================================
TEST CASE ID        : INV-TC002
TEST NAME           : Validate Invoice Date Non-Future Boundary
TEST TYPE           : Negative Scenario (Date Logic / Boundary Check)
TARGET TABLE        : Invoice
DESCRIPTION         : Verify that no invoice records contain future dates 
                      exceeding the system date or realistic transactional bounds.
EXPECTED RESULT     : 0 rows returned (No future-dated invoices found).
===============================================================================
*/

SELECT InvoiceId, CustomerId, InvoiceDate
FROM Invoice
WHERE InvoiceDate > CURRENT_DATE;










