package com.dshandson.testing;

import static org.mockito.Mockito.*;
import org.junit.Test; // Correct import for JUnit 4
import org.mockito.Mockito;

public class MyServiceTest { 
    @Test 
    public void testVerifyInteraction() { 
        // 1. Create a mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        
        // 2. Pass it to the service
        MyService service = new MyService(mockApi); 
        
        // 3. Act: Call the method
        service.fetchData(); 
        
        
        verify(mockApi).getData(); 
    } 
}