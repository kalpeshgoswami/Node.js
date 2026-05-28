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
    },

    filename: (res, file, cd) => {
        const uniqueName = `${file.filename}-${Date.now()}-${file.originalname}`;

        cd(null, uniqueName);
    }

});

const fileFilter = (req, file, cd) => {

    const ImageType = [
        "image/jpg",
        "image/jpeg",
        "image/png"
    ];

    const DocumentType = [
        "application/pdf"
    ]

    if (file.fieldname === "eventDocument") {
        if (ImagesType.include(file.mimetype)) {
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

