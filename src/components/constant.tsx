// src/utils/handleDownload.js

/**
 * Handles reliable file downloads using the Fetch API.
 * @param {string} fileUrl - The absolute or relative path to the file.
 * @param {string} fileName - The desired name for the downloaded file.
 */
const handleDownload = async () => {
  try {
    // Define your specific file details
    const fileUrl = "/portfolio/Zameer_Siddique_Resume.pdf";
    const fileName = "Zameer_Siddique_Resume.pdf";
    
    const response = await fetch(fileUrl);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    
    // Create a temporary URL for the blob data
    const blobUrl = window.URL.createObjectURL(blob);
    
    // Create and click a temporary link to trigger the download
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName; // Specify the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the blob URL after use to free memory
    window.URL.revokeObjectURL(blobUrl);

  } catch (error) {
    console.error("Download failed:", error);
    alert("Failed to download the file. Please try again later.");
  }
};

export default handleDownload;
