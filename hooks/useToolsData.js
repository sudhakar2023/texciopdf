import {
  FileEarmarkExcel,
  FileEarmarkPdf,
  FileEarmarkPpt,
  FileEarmarkWord,
  FileEarmarkZip,
  FiletypeBmp,
  FiletypeJpg,
  FiletypePng,
  FiletypeTiff,
  FiletypeTxt,
  Lock,
  Unlock,
} from "react-bootstrap-icons";
import { useTranslation } from "next-i18next";
const useToolsData = () => {
  const { t } = useTranslation();

  const toolsData = {
    MergePDFTool: {
      key: "MergePDF",
      title: t("common:tool_name_merge_pdf"),
      description: t("common:tool_desc_merge_pdf"),
      href: "/merge-pdf",
      icon: <FileEarmarkPdf />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "MergedPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "",
    },

    RotatePDFTool: {
      key: "RotatePDF",
      title: t("common:tool_name_rotate_pdf"),
      description: t("common:tool_desc_rotate_pdf"),
      href: "/rotate-pdf-pages",
      icon: <FileEarmarkPdf />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_RotatePDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "",
    },

    RemovePDFPagesTool: {
      key: "RemovePDFPages",
      title: t("common:tool_name_remove_Pages"),
      description: t("common:tool_desc_remove_Pages"),
      href: "/remove-pdf-pages",
      icon: <FileEarmarkPdf />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_RemovePDFPages.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "",
    },

    OrganizePDFTool: {
      key: "OrganizePDF",
      title: t("common:tool_name_organize_pdf"),
      description: t("common:tool_desc_organize_pdf"),
      href: "/organize-pdf-pages",
      icon: <FileEarmarkPdf />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_OrganizePDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "",
    },

    CompressPDFTool: {
      key: "CompressPDF",
      title: t("common:tool_name_compress_pdf"),
      description: t("common:tool_desc_compress_pdf"),
      href: "/compress-pdf",
      icon: <FileEarmarkPdf />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_compressed.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/compress-pdf",
    },

    GrayscalePDFTool: {
      key: "GrayscalePDF",
      title: t("common:tool_name_grayscale_pdf"),
      description: t("common:tool_desc_grayscale_pdf"),
      href: "/grayscale-pdf",
      icon: <FileEarmarkPdf />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_grayscaled.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/grayscale-pdf",
    },

    ExtractPagesTool: {
      key: "ExtractPages",
      title: t("common:tool_name_extract_pages"),
      description: t("common:tool_desc_extract_pages"),
      href: "/extract-pdf-pages",
      icon: <FileEarmarkPdf />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_ExtractPages.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/extract-pdf-pages",
    },

    RepairPDFTool: {
      key: "RepairPDF",
      title: t("common:tool_name_repair_pdf"),
      description: t("common:tool_desc_repair_pdf"),
      href: "/repair-pdf",
      icon: <FileEarmarkPdf />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_RepairPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/repair-pdf",
    },

    JPGToPDFTool: {
      key: "JPGToPDF",
      title: t("common:tool_name_jpg_to_pdf"),
      description: t("common:tool_desc_jpg_to_pdf"),
      href: "/jpg-to-pdf",
      icon: <FiletypeJpg />,
      acceptedInputMimeType: "image/jpeg",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_JPGToPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/jpg-to-pdf",
    },

    PNGToPDFTool: {
      key: "PNGToPDF",
      title: t("common:tool_name_png_to_pdf"),
      description: t("common:tool_desc_png_to_pdf"),
      href: "/png-to-pdf",
      icon: <FiletypePng />,
      acceptedInputMimeType: "image/png",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_PNGToPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/png-to-pdf",
    },

    BMPToPDFTool: {
      key: "BMPToPDF",
      title: t("common:tool_name_bmp_to_pdf"),
      description: t("common:tool_desc_bmp_to_pdf"),
      href: "/bmp-to-pdf",
      icon: <FiletypeBmp />,
      acceptedInputMimeType: "image/bmp",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_JPGToBMP.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/bmp-to-pdf",
    },

    TIFFToPDFTool: {
      key: "TIFFToPDF",
      title: t("common:tool_name_tiff_to_pdf"),
      description: t("common:tool_desc_tiff_to_pdf"),
      href: "/tiff-to-pdf",
      icon: <FiletypeTiff />,
      acceptedInputMimeType: "image/tiff",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_TIFFToPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "/img/tiff-thumbnail.png",
      URI: "/tiff-to-pdf",
    },

    WORDToPDFTool: {
      key: "WORDToPDF",
      title: t("common:tool_name_word_to_pdf"),
      description: t("common:tool_desc_word_to_pdf"),
      href: "/word-to-pdf",
      icon: <FileEarmarkWord />,
      acceptedInputMimeType:
        "application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_WORDToPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "/img/word-thumbnail.png",
      URI: "/word-to-pdf",
    },

    PPTXToPDFTool: {
      key: "PPTXToPDF",
      title: t("common:tool_name_powerpoint_to_pdf"),
      description: t("common:tool_desc_powerpoint_to_pdf"),
      href: "/pptx-to-pdf",
      icon: <FileEarmarkPpt />,
      acceptedInputMimeType:
        "application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_PPTXToPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "/img/pptx-thumbnail.png",
      URI: "/pptx-to-pdf",
    },

    TXTToPDFTool: {
      key: "TXTToPDF",
      title: t("common:tool_name_txt_to_pdf"),
      description: t("common:tool_desc_txt_to_pdf"),
      href: "/txt-to-pdf",
      icon: <FiletypeTxt />,
      acceptedInputMimeType: "text/plain",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_TXTToPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "/img/txt-thumbnail.png",
      URI: "/txt-to-pdf",
    },

    EXCELToPDFTool: {
      key: "EXCELToPDF",
      title: t("common:tool_name_excel_to_pdf"),
      description: t("common:tool_desc_excel_to_pdf"),
      href: "/excel-to-pdf",
      icon: <FileEarmarkExcel />,
      acceptedInputMimeType:
        "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_EXCELToPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "/img/excel-thumbnail.png",
      URI: "/excel-to-pdf",
    },

    PDFToJPGTool: {
      key: "PDFToJPG",
      title: t("common:tool_name_pdf_to_jpg"),
      description: t("common:tool_desc_pdf_to_jpg"),
      href: "/pdf-to-jpg",
      icon: <FiletypeJpg />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_PDFToJPG.zip",
      outputFileMimeType: "application/zip",
      thumbnailImageURL: "",
      URI: "/pdf-to-jpg",
    },

    PDFToPNGTool: {
      key: "PDFToPNG",
      title: t("common:tool_name_pdf_to_png"),
      description: t("common:tool_desc_pdf_to_png"),
      href: "/pdf-to-png",
      icon: <FiletypePng />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_PDFToPNG.zip",
      outputFileMimeType: "application/zip",
      thumbnailImageURL: "",
      URI: "/pdf-to-png",
    },

    PDFToBMPTool: {
      key: "PDFToBMP",
      title: t("common:tool_name_pdf_to_bmp"),
      description: t("common:tool_desc_pdf_to_bmp"),
      href: "/pdf-to-bmp",
      icon: <FiletypeBmp />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 10485760, //10MB = 10240KB (in binary) = 10485760 B (in binary),
      newFileNameSuffix: "_PDFToBMP.zip",
      outputFileMimeType: "application/zip",
      thumbnailImageURL: "",
      URI: "/pdf-to-bmp",
    },

    PDFToTIFFTool: {
      key: "PDFToTIFF",
      title: t("common:tool_name_pdf_to_tiff"),
      description: t("common:tool_desc_pdf_to_tiff"),
      href: "/pdf-to-tiff",
      icon: <FiletypeTiff />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_PDFToTIFF.zip",
      outputFileMimeType: "application/zip",
      thumbnailImageURL: "",
      URI: "/pdf-to-tiff",
    },

    PDFToWORDTool: {
      key: "PDFToWORD",
      title: t("common:tool_name_pdf_to_word"),
      description: t("common:tool_desc_pdf_to_word"),
      href: "/pdf-to-word",
      icon: <FileEarmarkWord />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_PDFToWORD.docx",
      outputFileMimeType: "application/msword",
      thumbnailImageURL: "",
      URI: "/pdf-to-word",
    },

    PDFToPPTXTool: {
      key: "PDFToPPTX",
      title: t("common:tool_name_pdf_to_powerpoint"),
      description: t("common:tool_desc_pdf_to_powerpoint"),
      href: "/pdf-to-pptx",
      icon: <FileEarmarkPpt />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_PDFToPPTX.pptx",
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      thumbnailImageURL: "",
      URI: "/pdf-to-pptx",
    },

    PDFToTXTTool: {
      key: "PDFToTXT",
      title: t("common:tool_name_pdf_to_txt"),
      description: t("common:tool_desc_pdf_to_txt"),
      href: "/pdf-to-txt",
      icon: <FiletypeTxt />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_PDFToTXT.txt",
      outputFileMimeType: "text/plain",
      thumbnailImageURL: "",
      URI: "/pdf-to-txt",
    },

    PDFToZIPTool: {
      key: "PDFToZIP",
      title: t("common:tool_name_pdf_to_zip"),
      description: t("common:tool_desc_pdf_to_zip"),
      href: "/pdf-to-zip",
      icon: <FileEarmarkZip />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: ".pdf",
      outputFileMimeType: "application/zip",
      thumbnailImageURL: "",
      URI: "",
    },

    ProtectPDFTool: {
      key: "ProtectPDF",
      title: t("common:tool_name_protect_pdf"),
      description: t("common:tool_desc_protect_pdf"),
      href: "/protect-pdf",
      icon: <Lock />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_ProtectPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/protect-pdf",
    },

    UnlockPDFTool: {
      key: "UnlockPDF",
      title: t("common:tool_name_unlock_pdf"),
      description: t("common:tool_desc_unlock_pdf"),
      href: "/unlock-pdf",
      icon: <Unlock />,
      acceptedInputMimeType: "application/pdf",
      acceptedInputFileMaxSize: 26214400, //25MB = 25600 KB (in binary) = 26214400 B (in binary),
      newFileNameSuffix: "_UnlockPDF.pdf",
      outputFileMimeType: "application/pdf",
      thumbnailImageURL: "",
      URI: "/unlock-pdf",
    },
  };

  return toolsData;
};

export default useToolsData;
