public class Main {
    public static void main(String[] args) {

        DocumentFactory word = new WordDocumentFactory();
        word.newDocument();

        DocumentFactory pdf = new PdfDocumentFactory();
        pdf.newDocument();

        DocumentFactory excel = new ExcelDocumentFactory();
        excel.newDocument();
    }
}