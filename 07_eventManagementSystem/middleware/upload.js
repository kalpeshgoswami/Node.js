import fs from "fs";

const storage = multer.diskStorage({

    destination: (req, res, cd) => {
        let folderName = "upload/";

        if (file.filename === "eventImage") {
            folderName += "eventImage"
        } else if (file.filename === "eventPoster") {
            folderName += "eventPoster"
        } else if (file.filename === "eventBanner") {
            folderName += "eventBanner"
        } else if (file.filename === "eventSpeaker") {
            folderName += "eventSpeaker"
        } else if (file.filename === "eventDocuments") {
            folderName += "eventDocuments"
        } else {
            folderName = "other"
        }
        fs.mkdirSync(folderName, {
            recursive: true
        });

        cd(null, folderName)
    }
});