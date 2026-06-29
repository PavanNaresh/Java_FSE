package com.dshandson.testing;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAA_PatternTest {
    
    private int val1;
    private int val2;

    @Before
    public void setUp() {
        // Arrange: Initialize values before EACH test
        val1 = 10;
        val2 = 20;
        System.out.println("Setting up test data...");
    }

    @After
    public void tearDown() {
        // Teardown: Clean up after EACH test
        val1 = 0;
        val2 = 0;
        System.out.println("Cleaning up test data...");
    }

    @Test
    public void testAddition() {
        // Arrange is handled by @Before
        
        // Act
        int result = val1 + val2;
        
        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = val2 - val1;
        
        // Assert
        assertEquals(10, result);
    }
}