interface Document {
    void open();
}

// Concrete Documents
class WordDocument implements Document {
    public void open() {
        System.out.println("Word Document Created.");
    }
}

class PdfDocument implements Document {
    public void open() {
        System.out.println("PDF Document Created.");
    }
}

class ExcelDocument implements Document {
    public void open() {
        System.out.println("Excel Document Created.");
    }
}

// Abstract Factory
abstract class DocumentFactory {
    abstract Document createDocument();

    public void newDocument() {
        Document doc = createDocument();
        doc.open();
    }
}

// Concrete Factories
class WordDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

class PdfDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

class ExcelDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}