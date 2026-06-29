package com.dshandson.testing;

import org.junit.Test;
import static org.junit.Assert.*; // The '*' imports all assertion types at once

public class AssertionsTest { 
    
    @Test 
    public void testAssertions() { 
        // 1. Assert Equals: Checks if two values match perfectly
        assertEquals(5, 2 + 3); 
 
        // 2. Assert True: Checks if a condition is fundamentally true
        assertTrue(5 > 3); 
 
        // 3. Assert False: Checks if a condition is fundamentally false
        assertFalse(5 < 3); 
 
        // 4. Assert Null: Checks if an object is completely empty (null)
        assertNull(null); 
 
        // 5. Assert Not Null: Checks if an object actually exists in memory
        assertNotNull(new Object()); 
    } 
}