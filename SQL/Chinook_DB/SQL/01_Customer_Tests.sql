SELECT * from Customer c ;

/*
===============================================================================
TEST CASE ID        : CUST-TC001
TEST NAME           : Validate Mandatory Field Constraint on Customer Names
TEST TYPE           : Negative Scenario (Null Check)
TARGET TABLE        : Customer
DESCRIPTION         : Verify that no customer records exist with a NULL FirstName 
                      or LastName, ensuring name fields are strictly enforced.
EXPECTED RESULT     : 0 rows returned (No NULL violations found).
===============================================================================
*/

SELECT CustomerId, FirstName, LastName, Email 
FROM Customer c
WHERE c.FirstName  IS NULL or c.LastName ;

/*
===============================================================================
TEST CASE ID        : CUST-TC002
TEST NAME           : Validate Email Uniqueness Constraint
TEST TYPE           : Negative Scenario (Data Integrity / Duplicate Check)
TARGET TABLE        : Customer
DESCRIPTION         : Verify that no duplicate email addresses exist in the 
                      Customer table to ensure account uniqueness.
EXPECTED RESULT     : 0 rows returned (No duplicate emails found).
===============================================================================
*/

SELECT Email, count(*) as duplicated_email from Customer c
where Email is not null
group by c.Email
HAVING count (*) > 1 ;

/*
===============================================================================
TEST CASE ID        : CUST-TC003
TEST NAME           : Validate Email Syntax and Formatting
TEST TYPE           : Negative Scenario (Data Format Validation)
TARGET TABLE        : Customer
DESCRIPTION         : Verify that all customer email addresses contain valid 
                      structural components ('@' and '.').
EXPECTED RESULT     : 0 rows returned (No malformed email addresses).
===============================================================================
*/

Select CustomerId ,Email from Customer c 
where Email not like '%@%.%';

/*
===============================================================================
TEST CASE ID        : CUST-TC004 
TEST NAME           : Validate Customer Support Rep Foreign Key Integrity
TEST TYPE           : Negative Scenario (Orphaned Record / Referential Integrity)
TARGET TABLE        : Customer (c), Employee (e)
DESCRIPTION         : Verify that every customer is assigned to a valid, 
                      existing Employee using NOT EXISTS operator.
EXPECTED RESULT     : 0 rows returned (No orphaned support rep references).
===============================================================================
*/

SELECT c.CustomerId ,c.FirstName, c.SupportRepId   from Customer c 
where c.SupportRepId is not null and not exists (
select 1
from Employee e 
where c.SupportRepId = e.EmployeeId 
);

-- OR
Select c.CustomerId , c.FirstName , c.SupportRepId, e.EmployeeId  from Customer c 
left join Employee e on e.EmployeeId = c.SupportRepId 
where c.SupportRepId IS Not Null 
And e.EmployeeId IS NULL ;

/*
===============================================================================
TEST CASE ID        : CUST-TC005
TEST NAME           : Validate Email Whitespace Cleanliness (Using TRIM)
TEST TYPE           : Negative Scenario (Data Hygiene / Boundary Check)
TARGET TABLE        : Customer
DESCRIPTION         : Verify that customer email addresses do not contain leading 
                      or trailing spaces using the TRIM function comparison.
EXPECTED RESULT     : 0 rows returned (No emails with leading/trailing spaces).
===============================================================================
*/

SELECT c.CustomerId , c.Email from Customer c 
where c.Email != TRIM(Email);


/*
===============================================================================
TEST CASE ID        : CUST-TC006
TEST NAME           : Validate Minimum Address Length
TEST TYPE           : Negative Scenario (Data Completeness / Business Logic)
TARGET TABLE        : Customer
DESCRIPTION         : Verify that customer address fields contain meaningful 
                      location data (at least 3 characters).
EXPECTED RESULT     : 0 rows returned (No invalid/dummy short addresses).
===============================================================================
*/

SELECT C.CustomerId , C.FirstName, C.Address , length(c.Address ) as Address_length from Customer c 
where length (TRIM(C.Address)) < 3; 

-- Check 
Select * from Employee e ;
Select * from Customer c ;

Pragma foreign_keys;


-- Get the most company h
SELECT Country , Count(*) as number_of_customer from Customer c 
group by c.Country 
HAVING  Count(*) > 5;


--create a bug by inserting customer with employee not found in system
insert into Customer values  (400,'Amany','Hash','BMW','fgxf','egypt','eg','egypt','8754','09756643','gvv','hjvjh','99' );
SELECT * from Employee e ;

--Same Test Case but Using left join 
Select c.CustomerId, c.FirstName , C.SupportRepId, e.EmployeeId  from Customer c
left join Employee e on c.SupportRepId  = e.EmployeeId 
where C.SupportRepId is not null and e.EmployeeId is null ;

--Validate if the CustomerID is uniqe 
SELECT c.CustomerId , count(*) as duplicated_custID from Customer c 
group by c.CustomerId
HAVING count(*) > 1 ;






