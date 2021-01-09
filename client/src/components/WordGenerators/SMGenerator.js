import { saveAs } from "file-saver";
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel,
    AlignmentType,
    PageBreak,
    Table,
    TableRow,
    TableCell,
    WidthType,
    BorderStyle,
} from "docx";
import {
    PARAGRAPH_INDENT_LEVEL,
    LIST_INDENT_LEVEL,
} from "../../utils/constants";

function createHeading(content) {
    return new Paragraph({
        children: [
            new TextRun({
                bold: true,
                text: content,
            }),
            addBreak(),
        ],
        alignment: AlignmentType.CENTER,
        heading: HeadingLevel.HEADING_3,
    });
}

function createSimpleParagraph(number, content) {
    return new Paragraph({
        indent: {
            firstLine: PARAGRAPH_INDENT_LEVEL,
        },
        children: [
            new TextRun(`${number}	`),
            new TextRun(` ${content}.`),
            addBreak(),
        ],
    });
}

function createUnderlinedQuotes(content) {
    return [
        new TextRun("“"),
        new TextRun({ text: content, underline: {} }),
        new TextRun("”"),
    ];
}

function addBreak() {
    return new TextRun({}).break();
}

function addDoubleBreak() {
    return [addBreak(), addBreak()];
}

function getArticleTwo() {
    return [
        createHeading("ARTICLE 2 MEMBERS AND MEMBERSHIP INTERESTS"),
        createSimpleParagraph(
            "2.1",
            "Initial Member",
            "In connection with the formation of the Company, the Person executing this Agreement as Member is admitted to the Company as of the date of formation of the Company"
        ),
        createSimpleParagraph(
            "2.2",
            "Nature of Membership Interest",
            "A membership interest in the Company is personal property. A Member of the Company or an assignee of a membership interest in the Company does not have an interest in any specific property of the Company. A membership interest includes a Member’s or assignee’s share of profits and losses or similar items and the right to receive distributions as provided in this agreement but does not include a Member’s right to participate in management"
        ),
        createSimpleParagraph(
            "2.3",
            "Certificates",
            "Membership interests in the Company shall be uncertificated"
        ),
    ];
}

function SMGenerator(companyDetails, contractHead, article1State, article2State, article3State, article4State, article5State, article6State, article7State, article9State, article10State, article11State) {
    console.log(article1State)
    const doc = new Document({
        // externalStyles: data,
    });

    doc.addSection({
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun({
                        text: "COMPANY AGREEMENT",
                        bold: true,
                    }),
                    new TextRun({
                        text: "OF",
                        bold: true,
                    }).break(),
                    new TextRun({
                        text: companyDetails.name,
                        bold: true,
                    }).break(),
                    addBreak(),
                ],
                alignment: AlignmentType.CENTER,
                heading: HeadingLevel.HEADING_3,
            }),
            new Paragraph({
                indent: {
                    firstLine: PARAGRAPH_INDENT_LEVEL,
                },
                children: [
                    new TextRun({
                        text: contractHead.intro,
                    })
                ],
            }),
            createHeading(article1State[0].heading),
            article1State.forEach((clause, index) => {
                createSimpleParagraph(`1.${index}`, Object.values(clause));
            }),
            // createSimpleParagraph("1.1", article1State[1].formation),
            // createSimpleParagraph("1.2", article1State[2].name),
            // createSimpleParagraph("1.3", article1State[3].duration),
            // createSimpleParagraph("1.4", article1State[4].purpose),
            // createSimpleParagraph("1.5", article1State[5].principalOffice),

            // new Paragraph({
            //     indent: {
            //         firstLine: PARAGRAPH_INDENT_LEVEL,
            //     },
            //     children: [
            //         new TextRun("1.1	"),
            //         new TextRun({
            //             text: article1State.formation,
            //         }),
            //         addBreak(),
            //     ],
            // }),
            // new Paragraph({
            //     indent: {
            //         firstLine: PARAGRAPH_INDENT_LEVEL,
            //     },
            //     children: [
            //         new TextRun("1.2	"),
            //         new TextRun({
            //             text: article1State.name,
            //         }),
            //         addBreak(),
            //     ],
            // }),
            // // createSimpleParagraph(
            // //     "1.3",
            // //     article1State.duration
            // // ),
            // new Paragraph({
            //     indent: {
            //         firstLine: PARAGRAPH_INDENT_LEVEL,
            //     },
            //     children: [
            //         new TextRun("1.4	"),
            //         new TextRun({
            //             text: article1State.purpose,
            //         }),
            //         addBreak(),
            //     ],
            // }),
            // new Paragraph({
            //     indent: {
            //         firstLine: PARAGRAPH_INDENT_LEVEL,
            //     },
            //     children: [
            //         new TextRun("1.5	"),
            //         new TextRun({
            //             text: article1State.principalOffice,
            //         }),
            //         addBreak(),
            //     ],
            // }),
            // new Paragraph({
            //     indent: {
            //         firstLine: PARAGRAPH_INDENT_LEVEL,
            //     },
            //     children: [
            //         new TextRun("1.6	"),
            //         new TextRun({
            //             text: article1State.registeredAgent,
            //         }),
            //         addBreak(),
            //     ],
            // }),
            // createSimpleParagraph(
            //     "1.7",
            //     article1State.definitions
            // ),

        ]
    });

    // // Used to export the file into a .docx file
    Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, "example.docx");
    });

    // Create document
}

export default SMGenerator;