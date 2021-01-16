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

function MMGenerator(members, contractHead, article1State, article2State, article3State, article4State, article5State, article6State, article7State, article8State, article9State, article10State, article11State) {

    const doc = new Document({
        // externalStyles: data,
    });

    if (Array.isArray(article8State[5])) {

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
                createClauseParagraph("2.1", article2State[1].initialMembers),
                createClauseParagraph("2.2", article2State[2].issuanceOfMembershipInterestsAfterFormationOfCompany),
                createClauseParagraph("2.3", article2State[3].natureOfMembershipInterest),
                createClauseParagraph("2.4", article2State[4].withdrawalOrExpulsionOfMember),
                createSubclauseParagraph("2.4.1", article2State[5][0]),
                createSubclauseParagraph("2.4.2", article2State[5][1]),
                createClauseParagraph("2.5", article2State[6].assignmentOfMembershipInterest),
                createClauseParagraph("2.6", article2State[7].admissionOfNewMembers),
                createClauseParagraph("2.7", article2State[8].rightsAndDutiesOfAssigneeOfMembershipInterestBeforeMembership),
                createSubclauseParagraph("2.7.1", article2State[9][0]),
                createSubclauseParagraph("2.7.2", article2State[9][1]),
                createClauseParagraph("2.8", article2State[10].rightsAndLiabilitiesOfAssigneeOfMembershipInterestAfterBecomingMember),
                createSubclauseParagraph("2.8.1", article2State[11][0]),
                createSubclauseParagraph("2.8.2", article2State[11][1]),
                createClauseParagraph("2.9", article2State[12].certificates),
                createClauseParagraph("2.10", article2State[13].representationsAndWarranties),
                createHeading(article3State[0].heading),
                createClauseParagraph("3.1", article3State[1].management),
                createClauseParagraph("3.2", article3State[2].officersAndOtherAgents),
                createClauseParagraph("3.3", article3State[3].locationOfMeetings),
                createClauseParagraph("3.4", article3State[4].alternativeFormsOfMeeting),
                createSubclauseParagraph("3.4.1", article2State[5][0]),
                createSubclauseParagraph("3.4.2", article2State[5][1]),
                createClauseParagraph("3.5", article3State[6].participationConstitutesPresence),
                createClauseParagraph("3.6", article3State[7].noticeOfMeetings),
                createClauseParagraph("3.7", article3State[8].waiverOfNotice),
                createClauseParagraph("3.8", article3State[9].whoMayCall),
                createClauseParagraph("3.9", article3State[10].timeOfNotice),
                createClauseParagraph("3.10", article3State[11].quorumAndActOfMembersOrCommittee),
                createClauseParagraph("3.11", article3State[12].votesRequiredToApproveCertainActions),
                createClauseParagraph("3.12", article3State[13].mannerOfVoting),
                createClauseParagraph("3.13", article3State[14].actionByWrittenConsent),
                createClauseParagraph("3.14", article3State[15].explicitVoteOrConsentRequired),
                createHeading(article4State[0].heading),
                createClauseParagraph("4.1", article4State[1].agreedCapitalContributions),
                createClauseParagraph("4.2", article4State[2].additionalCapitalContributions),
                createClauseParagraph("4.3", article4State[3].capitalAccounts),
                createHeading(article5State[0].heading),
                createClauseParagraph("5.1", article5State[1].general),
                createClauseParagraph("5.2", article5State[2].regulatoryAllocations),
                createClauseParagraph("5.3", article5State[3].reporting),
                createHeading(article6State[0].heading),
                createClauseParagraph("6.1", article6State[1].distributions),
                createClauseParagraph("6.2", article6State[2].requiredAnnualTaxDistribution),
                createHeading(article7State[0].heading),
                createClauseParagraph("7.1", article7State[1].bankAccountsInvestments),
                createClauseParagraph("7.2", article7State[2].booksAndRecords),
                createSubclauseParagraph("7.2.1", article7State[3][0]),
                createSubclauseParagraph("7.2.2", article7State[3][1]),
                createSubclauseParagraph("7.2.3", article7State[3][2]),
                createSubclauseParagraph("7.2.4", article7State[3][3]),
                createClauseParagraph("7.3", article7State[4].financialInformation),
                createClauseParagraph("7.4", article7State[5].taxReturnsAndInformationGoverningDocuments),
                createClauseParagraph("7.5", article7State[6].fiscalYear),
                createHeading(article8State[0].heading),
                createClauseParagraph("8.1", article8State[1].rightOfFirstRefusal),
                createClauseParagraph("8.2", article8State[2].deathOrDivocrceOfMemberOrSpouse),
                createSubclauseParagraph("8.2.1", article8State[3][0]),
                createSubclauseParagraph("8.2.2", article8State[3][1]),
                createSubclauseParagraph("8.2.3", article8State[3][2]),
                createSubclauseParagraph("8.2.4", article8State[3][3]),
                createClauseParagraph("8.3", article8State[4].pushPullBuyout),
                createSubclauseParagraph("8.3.1", article8State[5][0]),
                createSubclauseParagraph("8.3.2", article8State[5][1]),
                createSubclauseParagraph("8.3.3", article8State[5][2]),
                createClauseParagraph("8.4", article8State[6].determinationOfPurchaseValue),
                createSubclauseParagraph("8.4.1", article8State[7][0]),
                createSubclauseParagraph("8.4.2", article8State[7][1]),
                createClauseParagraph("8.5", article8State[8].closingOfSalePaymentOfPurchasePrice),
                createClauseParagraph("8.6", article8State[9].basisAdjustment),
                createHeading(article9State[0].heading),
                createClauseParagraph("9.1", article9State[1].exculpation),
                createSubclauseParagraph("9.1.1", article9State[2][0]),
                createSubclauseParagraph("9.1.2", article9State[2][1]),
                createSubclauseParagraph("9.1.3", article9State[2][2]),
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
                createSubclauseParagraph("10.3.4", article10State[4][3]),
                createClauseParagraph("10.4", article10State[5].termination),
                createHeading(article11State[0].heading),
                createClauseParagraph("11.1", article11State[1].notices),
                createClauseParagraph("11.2", article11State[2].entireAgreement),
                createClauseParagraph("11.3", article11State[3].amendments),
                createClauseParagraph("11.4", article11State[4].governingLaw),
                createClauseParagraph("11.5", article11State[5].powerOfAttorney),
                createClauseParagraph("11.6", article11State[6].bindingEffectNoThirdPartyBeneficiaries),
                createClauseParagraph("11.7", article11State[7].counterparts),
                createClauseParagraph("11.8", article11State[8].certainDefinitions),
                createSubclauseParagraph("11.8.1", article11State[9][0]),
                createSubclauseParagraph("11.8.2", article11State[9][1]),
                createSubclauseParagraph("11.8.3", article11State[9][2]),
                createSubclauseParagraph("11.8.4", article11State[9][3]),
                createSubclauseParagraph("11.8.5", article11State[9][4]),
                createSubclauseParagraph("11.8.6", article11State[9][6]),
                createSubclauseParagraph("11.8.7", article11State[9][7]),
                createSubclauseParagraph("11.8.8", article11State[9][8]),
                createSubclauseParagraph("11.8.9", article11State[9][9]),
                createClauseParagraph("11.9", article11State[10].construction),
                createSubclauseParagraph("11.9.1", article11State[11][0]),
                createSubclauseParagraph("11.9.2", article11State[11][1]),
                createSubclauseParagraph("11.9.3", article11State[11][2]),
                createSubclauseParagraph("11.9.4", article11State[11][3]),
                createSubclauseParagraph("11.9.5", article11State[11][4]),
                createIndentParagraph(" IN WITNESS WHEREOF, the undersigned Members have duly executed this Agreement as of the day and year first above written."),
                createParagraph("MEMBERS:"),
                createSignatureBlock(members[0].name),
                createSignatureBlock(members[1].name)
            ]
        })

    } else {

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
                createClauseParagraph("2.1", article2State[1].initialMembers),
                createClauseParagraph("2.2", article2State[2].issuanceOfMembershipInterestsAfterFormationOfCompany),
                createClauseParagraph("2.3", article2State[3].natureOfMembershipInterest),
                createClauseParagraph("2.4", article2State[4].withdrawalOrExpulsionOfMember),
                createSubclauseParagraph("2.4.1", article2State[5][0]),
                createSubclauseParagraph("2.4.2", article2State[5][1]),
                createClauseParagraph("2.5", article2State[6].assignmentOfMembershipInterest),
                createClauseParagraph("2.6", article2State[7].admissionOfNewMembers),
                createClauseParagraph("2.7", article2State[8].rightsAndDutiesOfAssigneeOfMembershipInterestBeforeMembership),
                createSubclauseParagraph("2.7.1", article2State[9][0]),
                createSubclauseParagraph("2.7.2", article2State[9][1]),
                createClauseParagraph("2.8", article2State[10].rightsAndLiabilitiesOfAssigneeOfMembershipInterestAfterBecomingMember),
                createSubclauseParagraph("2.8.1", article2State[11][0]),
                createSubclauseParagraph("2.8.2", article2State[11][1]),
                createClauseParagraph("2.9", article2State[12].certificates),
                createClauseParagraph("2.10", article2State[13].representationsAndWarranties),
                createHeading(article3State[0].heading),
                createClauseParagraph("3.1", article3State[1].management),
                createClauseParagraph("3.2", article3State[2].officersAndOtherAgents),
                createClauseParagraph("3.3", article3State[3].locationOfMeetings),
                createClauseParagraph("3.4", article3State[4].alternativeFormsOfMeeting),
                createSubclauseParagraph("3.4.1", article2State[5][0]),
                createSubclauseParagraph("3.4.2", article2State[5][1]),
                createClauseParagraph("3.5", article3State[6].participationConstitutesPresence),
                createClauseParagraph("3.6", article3State[7].noticeOfMeetings),
                createClauseParagraph("3.7", article3State[8].waiverOfNotice),
                createClauseParagraph("3.8", article3State[9].whoMayCall),
                createClauseParagraph("3.9", article3State[10].timeOfNotice),
                createClauseParagraph("3.10", article3State[11].quorumAndActOfMembersOrCommittee),
                createClauseParagraph("3.11", article3State[12].votesRequiredToApproveCertainActions),
                createClauseParagraph("3.12", article3State[13].mannerOfVoting),
                createClauseParagraph("3.13", article3State[14].actionByWrittenConsent),
                createClauseParagraph("3.14", article3State[15].explicitVoteOrConsentRequired),
                createHeading(article4State[0].heading),
                createClauseParagraph("4.1", article4State[1].agreedCapitalContributions),
                createClauseParagraph("4.2", article4State[2].additionalCapitalContributions),
                createClauseParagraph("4.3", article4State[3].capitalAccounts),
                createHeading(article5State[0].heading),
                createClauseParagraph("5.1", article5State[1].general),
                createClauseParagraph("5.2", article5State[2].regulatoryAllocations),
                createClauseParagraph("5.3", article5State[3].reporting),
                createHeading(article6State[0].heading),
                createClauseParagraph("6.1", article6State[1].distributions),
                createClauseParagraph("6.2", article6State[2].requiredAnnualTaxDistribution),
                createHeading(article7State[0].heading),
                createClauseParagraph("7.1", article7State[1].bankAccountsInvestments),
                createClauseParagraph("7.2", article7State[2].booksAndRecords),
                createSubclauseParagraph("7.2.1", article7State[3][0]),
                createSubclauseParagraph("7.2.2", article7State[3][1]),
                createSubclauseParagraph("7.2.3", article7State[3][2]),
                createSubclauseParagraph("7.2.4", article7State[3][3]),
                createClauseParagraph("7.3", article7State[4].financialInformation),
                createClauseParagraph("7.4", article7State[5].taxReturnsAndInformationGoverningDocuments),
                createClauseParagraph("7.5", article7State[6].fiscalYear),
                createHeading(article8State[0].heading),
                createClauseParagraph("8.1", article8State[1].rightOfFirstRefusal),
                createClauseParagraph("8.2", article8State[2].deathOrDivocrceOfMemberOrSpouse),
                createSubclauseParagraph("8.2.1", article8State[3][0]),
                createSubclauseParagraph("8.2.2", article8State[3][1]),
                createSubclauseParagraph("8.2.3", article8State[3][2]),
                createSubclauseParagraph("8.2.4", article8State[3][3]),
                createClauseParagraph("8.3", article8State[4].pushPullBuyout),
                createClauseParagraph("8.4", article8State[5].determinationOfPurchaseValue),
                createSubclauseParagraph("8.4.1", article8State[6][0]),
                createSubclauseParagraph("8.4.2", article8State[6][1]),
                createClauseParagraph("8.5", article8State[7].closingOfSalePaymentOfPurchasePrice),
                createClauseParagraph("8.6", article8State[8].basisAdjustment),
                createHeading(article9State[0].heading),
                createClauseParagraph("9.1", article9State[1].exculpation),
                createSubclauseParagraph("9.1.1", article9State[2][0]),
                createSubclauseParagraph("9.1.2", article9State[2][1]),
                createSubclauseParagraph("9.1.3", article9State[2][2]),
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
                createSubclauseParagraph("10.3.4", article10State[4][3]),
                createClauseParagraph("10.4", article10State[5].termination),
                createHeading(article11State[0].heading),
                createClauseParagraph("11.1", article11State[1].notices),
                createClauseParagraph("11.2", article11State[2].entireAgreement),
                createClauseParagraph("11.3", article11State[3].amendments),
                createClauseParagraph("11.4", article11State[4].governingLaw),
                createClauseParagraph("11.5", article11State[5].powerOfAttorney),
                createClauseParagraph("11.6", article11State[6].bindingEffectNoThirdPartyBeneficiaries),
                createClauseParagraph("11.7", article11State[7].counterparts),
                createClauseParagraph("11.8", article11State[8].certainDefinitions),
                createSubclauseParagraph("11.8.1", article11State[9][0]),
                createSubclauseParagraph("11.8.2", article11State[9][1]),
                createSubclauseParagraph("11.8.3", article11State[9][2]),
                createSubclauseParagraph("11.8.4", article11State[9][3]),
                createSubclauseParagraph("11.8.5", article11State[9][4]),
                createSubclauseParagraph("11.8.6", article11State[9][6]),
                createSubclauseParagraph("11.8.7", article11State[9][7]),
                createSubclauseParagraph("11.8.8", article11State[9][8]),
                createSubclauseParagraph("11.8.9", article11State[9][9]),
                createClauseParagraph("11.9", article11State[10].construction),
                createSubclauseParagraph("11.9.1", article11State[11][0]),
                createSubclauseParagraph("11.9.2", article11State[11][1]),
                createSubclauseParagraph("11.9.3", article11State[11][2]),
                createSubclauseParagraph("11.9.4", article11State[11][3]),
                createSubclauseParagraph("11.9.5", article11State[11][4]),
                createIndentParagraph(" IN WITNESS WHEREOF, the undersigned Members have duly executed this Agreement as of the day and year first above written."),
                createParagraph("MEMBERS:"),
                createSignatureBlock(members[0].name),
                createSignatureBlock(members[1].name)

            ]
        })

    }

    // // Used to export the file into a .docx file
    Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, "multi-member-company-agreement.docx");
    });

    // Create document
}

export default MMGenerator;