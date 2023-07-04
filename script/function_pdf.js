function afficherPDF(cheminPDF) {
  var pdfViewerContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>PDF Viewer</title>
        <style>
            body {
                margin: 0;
                padding: 0;
            }

            embed {
                width: 100%;
                height: 100vh;
            }
        </style>
    </head>
    <body>
        <embed src="${cheminPDF}" type="application/pdf" title="PDF Viewer" />
    </body>
    </html>
  `;

  // Ouvrir une nouvelle fenêtre du navigateur avec le contenu HTML et le PDF intégré
  var pdfWindow = window.open();
  pdfWindow.document.open();
  pdfWindow.document.write(pdfViewerContent);
  pdfWindow.document.close();
}