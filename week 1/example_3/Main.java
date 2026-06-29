import java.util.Arrays;
import java.util.Comparator;

public class Main {

    // Linear Search
    static Product linearSearch(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id)
                return p;
        }
        return null;
    }

    // Binary Search
    static Product binarySearch(Product[] products, int id) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == id)
                return products[mid];
            else if (products[mid].productId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(103, "Keyboard", "Electronics"),
                new Product(101, "Laptop", "Electronics"),
                new Product(104, "Shoes", "Fashion"),
                new Product(102, "Phone", "Electronics"),
                new Product(105, "Watch", "Accessories")
        };

        // Linear Search
        Product p1 = linearSearch(products, 102);

        if (p1 != null)
            System.out.println("Linear Search Found: " + p1.productName);

        // Sort for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        Product p2 = binarySearch(products, 102);

        if (p2 != null)
            System.out.println("Binary Search Found: " + p2.productName);
    }
}