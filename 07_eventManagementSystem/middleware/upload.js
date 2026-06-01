import multer from "multer";
import fs from "fs";


const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        let folderName = "upload/";

        if (file.fieldname  === "eventImage") {
            folderName += "eventImage"
        } else if (file.fieldname  === "eventPoster") {
            folderName += "eventPoster"
        } else if (file.fieldname  === "eventBanner") {
            folderName += "eventBanner"
        } else if (file.fieldname  === "eventSpeaker") {
            folderName += "eventSpeaker"
        } else if (file.fieldname  === "eventDocuments") {
            folderName += "eventDocuments"
        } else {
            folderName = "other"
        }
        fs.mkdirSync(folderName, {
            recursive: true
        });

        cb(null, folderName)
    },

    filename: (req, file, cb) => {
        const uniqueName = `${file.fieldname}-${Date.now()}-${file.originalname}`;

        cb(null, uniqueName);
    }

});

const fileFilter = (req, file, cb) => {

    const ImageType = [
        "image/jpg",
        "image/jpeg",
        "image/png"
    ];

    const DocumentType = [
        "application/pdf"
    ]

    if (file.fieldname === "eventDocuments") {
        if (DocumentType.includes(file.mimetype)) {
            cb(null, true);
        }
        cb(new Error("only jpg, jpeg, png is allowed"));
    }

}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 20 * 1024 * 1024
    }
});

export default upload;

