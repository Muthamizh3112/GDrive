AOS.init();
    
    function generateEmbedLink() {
        var driveLinkInput = document.getElementById('driveLink');
        var embedLinkInput = document.getElementById('embedLink');
        var resultDiv = document.getElementById('result');

        var driveLink = driveLinkInput.value.trim();

        if (driveLink !== '') {
            var fileId = extractFileId(driveLink);

            if (fileId !== null) {
                var beautifiedLink = 'https://drive.google.com/uc?id=' + fileId;
                embedLinkInput.value = beautifiedLink;
                resultDiv.style.display = 'block';
            } else {
                alert('Invalid Google Drive link. Please enter a valid link.');
            }
        } else {
            alert('Please enter a Google Drive link.');
        }
    }

    function extractFileId(driveLink) {
        var fileIdRegex = /\/d\/([^/]+)\//;
        var match = driveLink.match(fileIdRegex);

        return match ? match[1] : null;
    }

    function copyToClipboard() {
    var embedLinkInput = document.getElementById('embedLink');

    // Select the text in the input field
    embedLinkInput.select();
    embedLinkInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Alert the user that the link has been copied
    alert('Link copied to clipboard!');
    }
