import { saveAs } from "file-saver";
import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    HeadingLevel,
    AlignmentType,
    // PageBreak,
    // Table,
    // TableRow,
    // TableCell,
    // WidthType,
    // BorderStyle,
} from "docx";
import {
    CLAUSE_INDENT_LEVEL,
    SUBCLAUSE_INDENT_LEVEL,
} from "../../utils/constants";

function createParagraph(content) {
    return new Paragraph({
        children: [
            new TextRun(` ${content}`),
            addBreak(),
        ],
    });
}

function createIndentParagraph(content) {
    return new Paragraph({
        indent: {
            firstLine: CLAUSE_INDENT_LEVEL,
        },
        children: [
            new TextRun(` ${content}`),
            addBreak(),
        ],
    });
}

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

function createClauseParagraph(number, content) {
    return new Paragraph({
        indent: {
            firstLine: CLAUSE_INDENT_LEVEL,
        },
        children: [
            new TextRun(`${number}	`),
            new TextRun(` ${content}`),
            addBreak(),
        ],
    });
}

function createSubclauseParagraph(number, content) {
    return new Paragraph({
        indent: {
            firstLine: SUBCLAUSE_INDENT_LEVEL,
        },
        children: [
            new TextRun(`${number}	`),
            new TextRun(` ${content}`),
            addBreak(),
        ],
    });
}

function createSignatureBlock(content) {
    return new Paragraph({
        children: [
            new TextRun(`________________________________`),
            addBreak(),
            new TextRun(` ${content}`),
            addBreak(),
        ],
    });
}

function addBreak() {
    return new TextRun({}).break();
}


function SMGenerator(members, contractHead, article1State, article2State, article3State, article4State, article5State, article6State, article7State, article8State, article9State, article10State, article11State) {

    console.log(contractHead);

    const doc = new Document({
        // externalStyles: data,
    });

    doc.addSection({
        properties: {},
        children: [
            createHeading(contractHead.heading),
            createIndentParagraph(contractHead.intro),
            createHeading(article1State[0].heading),
            createClauseParagraph("1.1", article1State[1].formation),
            createClauseParagraph("1.2", article1State[2].name),
            createClauseParagraph("1.3", article1State[3].duration),
            createClauseParagraph("1.4", article1State[4].purpose),
            createClauseParagraph("1.5", article1State[5].principalOffice),
            createClauseParagraph("1.6", article1State[6].registeredAgent),
            createClauseParagraph("1.7", article1State[7].definitions),
            createHeading(article2State[0].heading),
            createClauseParagraph("2.1", article2State[1].initialMember),
            createClauseParagraph("2.2", article2State[2].natureOfMembershipInterest),
            createHeading(article3State[0].heading),
            createClauseParagraph("3.1", article3State[1].management),
            createClauseParagraph("3.2", article3State[2].officers),
            createHeading(article4State[0].heading),
            createClauseParagraph("4.1", article4State[1].agreedCapitalContributions),
            createClauseParagraph("4.2", article4State[2].additionalCapitalContributions),
            createHeading(article5State[0].heading),
            createClauseParagraph("5.1", article5State[1].taxStatus),
            createHeading(article6State[0].heading),
            createClauseParagraph("6.1", article6State[1].distributions),
            createClauseParagraph("6.2", article6State[2].noDistributionUponWithdrawal),
            createHeading(article7State[0].heading),
            createClauseParagraph("7.1", article7State[1].bankAccountsInvestments),
            createClauseParagraph("7.2", article7State[2].booksAndRecords),
            createClauseParagraph("7.3", article7State[3].fiscalYear),
            createHeading(article8State[0].heading),
            createClauseParagraph("8.1", article8State[1].assignmentPermitted),
            createClauseParagraph("8.2", article8State[2].assignmentOfEntireInterest),
            createClauseParagraph("8.3", article8State[3].assignmentOfPartialInterest),
            createHeading(article9State[0].heading),
            createClauseParagraph("9.1", article9State[1].exculpation),
            createSubclauseParagraph("9.1.1", article9State[2][0]),
            createSubclauseParagraph("9.1.2", article9State[2][1]),
            createClauseParagraph("9.2", article9State[3].scopeOfDutiesOfCoveredPersons),
            createClauseParagraph("9.3", article9State[4].indemnification),
            createClauseParagraph("9.4", article9State[5].expenses),
            createClauseParagraph("9.5", article9State[6].insurance),
            createClauseParagraph("9.6", article9State[7].durationOfProtection),
            createHeading(article10State[0].heading),
            createClauseParagraph("10.1", article10State[1].eventsRequiringWindingUp),
            createClauseParagraph("10.2", article10State[2].revocationOrReinstatement),
            createClauseParagraph("10.3", article10State[3].windingUpAffairsAndDistributionOfAssets),
            createSubclauseParagraph("10.3.1", article10State[4][0]),
            createSubclauseParagraph("10.3.2", article10State[4][1]),
            createSubclauseParagraph("10.3.3", article10State[4][2]),
            createClauseParagraph("10.4", article10State[5].termination),
            createHeading(article11State[0].heading),
            createClauseParagraph("11.1", article11State[1].entireAgreement),
            createClauseParagraph("11.2", article11State[2].amendments),
            createClauseParagraph("11.3", article11State[3].governingLaw),
            createClauseParagraph("11.4", article11State[4].bindingEffectNoThirdPartyBeneficiaries),
            createClauseParagraph("11.5", article11State[5].certainDefinitions),
            createSubclauseParagraph("11.5.1", article11State[6][0]),
            createSubclauseParagraph("11.5.2", article11State[6][1]),
            createSubclauseParagraph("11.5.3", article11State[6][2]),
            createSubclauseParagraph("11.5.4", article11State[6][3]),
            createClauseParagraph("11.6", article11State[7].construction),
            createSubclauseParagraph("11.6.1", article11State[8][0]),
            createSubclauseParagraph("11.6.2", article11State[8][1]),
            createSubclauseParagraph("11.6.3", article11State[8][2]),
            createSubclauseParagraph("11.6.4", article11State[8][3]),
            createSubclauseParagraph("11.6.5", article11State[8][4]),
            createIndentParagraph(" IN WITNESS WHEREOF, the undersigned Member has duly executed this Agreement as of the day and year first above written."),
            createParagraph("MEMBER:"),
            createSignatureBlock(members[0].name)

        ]
    });

    // // Used to export the file into a .docx file
    Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, "single-member-company-agreement.docx");
    });

    // Create document
}

export default SMGenerator;