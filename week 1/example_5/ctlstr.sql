-- Create Customers Table
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    age NUMBER,
    balance NUMBER(12, 2),
    is_vip VARCHAR2(5) DEFAULT 'FALSE'
);

-- Create Loans Table
CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    loan_amount NUMBER(12, 2),
    interest_rate NUMBER(4, 2),
    expiry_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert Sample Customers
INSERT INTO customers (customer_id, customer_name, age, balance) VALUES (1, 'Alice Smith', 65, 5000.00);
INSERT INTO customers (customer_id, customer_name, age, balance) VALUES (2, 'Bob Jones', 45, 12000.00);
INSERT INTO customers (customer_id, customer_name, age, balance) VALUES (3, 'Charlie Brown', 70, 15000.00);
INSERT INTO customers (customer_id, customer_name, age, balance) VALUES (4, 'Diana Prince', 30, 2500.00);

-- Insert Sample Loans
-- Note: SYSDATE + 15 means due in 15 days, SYSDATE + 45 means due in 45 days
INSERT INTO loans (loan_id, customer_id, loan_amount, interest_rate, expiry_date) 
VALUES (101, 1, 50000.00, 5.50, SYSDATE + 15);

INSERT INTO loans (loan_id, customer_id, loan_amount, interest_rate, expiry_date) 
VALUES (102, 2, 20000.00, 6.00, SYSDATE + 45);

INSERT INTO loans (loan_id, customer_id, loan_amount, interest_rate, expiry_date) 
VALUES (103, 3, 80000.00, 4.50, SYSDATE + 10);

COMMIT;

SET SERVEROUTPUT ON;

BEGIN
    FOR r_loan IN (
        SELECT l.loan_id, c.customer_name, c.age, l.interest_rate 
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
    ) LOOP
        IF r_loan.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - 1
            WHERE loan_id = r_loan.loan_id;
            
            DBMS_OUTPUT.PUT_LINE('Discount applied for ' || r_loan.customer_name || ' (ID: ' || r_loan.loan_id || '). New rate: ' || (r_loan.interest_rate - 1) || '%');
        END IF;
    END LOOP;
    COMMIT;
END;
/

BEGIN
    FOR r_cust IN (SELECT customer_id, customer_name, balance FROM customers) LOOP
        IF r_cust.balance > 10000 THEN
            UPDATE customers
            SET is_vip = 'TRUE'
            WHERE customer_id = r_cust.customer_id;
            
            DBMS_OUTPUT.PUT_LINE(r_cust.customer_name || ' has been promoted to VIP status.');
        END IF;
    END LOOP;
    COMMIT;
END;
/

BEGIN
    FOR r_reminder IN (
        SELECT c.customer_name, l.loan_id, l.expiry_date 
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.expiry_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('REMINDER: Hello ' || r_reminder.customer_name || 
                             ', your loan #' || r_reminder.loan_id || 
                             ' is due on ' || TO_CHAR(r_reminder.expiry_date, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/