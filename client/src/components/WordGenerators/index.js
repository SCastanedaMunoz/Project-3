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
// import axios from "axios";
// TODO use this to load XML Styling for Document
// import styles from "../../utils/styles.xml";
// axios
//   .get(styles, {
//     "Content-Type": "application/xml; charset=utf-8",
//   })
//   .then(({ data }) => {});

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

function createSimpleParagraph(number, heading, content) {
  return new Paragraph({
    indent: {
      firstLine: PARAGRAPH_INDENT_LEVEL,
    },
    children: [
      new TextRun(`${number}	`),
      new TextRun({
        text: `${heading}.`,
        bold: true,
        underline: {},
      }),
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

function getArticleOne() {
  return [
    createHeading("ARTICLE 1 FORMATION"),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun("1.1	"),
        new TextRun({
          text: "Formation.",
          bold: true,
          underline: {},
        }),
        // TODO ADD Company Name
        new TextRun(" ____________ [NAME] "),
        new TextRun(
          "was formed as a limited liability company under and pursuant to the Texas Business Organizations Code (the “"
        ),
        new TextRun({
          text: "BOC",
          underline: {},
        }),
        // TODO Add Filing Date

        new TextRun(
          "”) and other relevant laws of the State of Texas by filing a certificate of formation with the Secretary of State of the State of Texas on _______________ ____, 20____ [FILING DATE]."
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun("1.2	"),
        new TextRun({
          text: "Name.",
          bold: true,
          underline: {},
        }),
        // TODO ADD Company Name
        new TextRun(
          " The name of the Company shall be ____________ [NAME]. The Company shall conduct business under that name or such other names complying with applicable law as the Members may determine from time to time."
        ),
        addBreak(),
      ],
    }),
    createSimpleParagraph(
      "1.3",
      "Duration",
      "The Company shall exist until terminated in accordance with this Agreement"
    ),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun("1.4	"),
        new TextRun({
          text: "Purpose.",
          bold: true,
          underline: {},
        }),
        // TODO ADD Business Type
        new TextRun(
          " The purpose of the Company shall be to engage in the business of ____________ [BUSINESS] and to engage in any other lawful business or activity necessary or convenient in pursuit of the foregoing purposes."
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun("1.5	"),
        new TextRun({
          text: "Principal Office.",
          bold: true,
          underline: {},
        }),
        // TODO ADD PRINCIPAL OFFICE
        new TextRun(
          " The Company’s principal office shall be ____________, ________________ ________ [PRINCIPAL OFFICE] or such other place as the Members may determine from time to time."
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun("1.6	"),
        new TextRun({
          text: "Registered Office and Registered Agent.",
          bold: true,
          underline: {},
        }),
        // TODO Add REgistered Office Address and Agent name
        new TextRun(
          " The initial address of the registered office of the Company in the State of Texas shall be ____________, ________________ ________ [REGISTERED OFFICE], and the name of the Company’s initial registered agent at that address shall be ________________ [REGISTERED AGENT]. The Members may change the registered office and the registered agent of the Company from time to time. The Members may cause the Company to qualify to do business as a limited liability company (or other entity in which the Members have limited liability) in any other jurisdiction and to designate any registered office or registered agent in any such jurisdiction."
        ),
        addBreak(),
      ],
    }),
    createSimpleParagraph(
      "1.7",
      "Definitions",
      "Certain terms used in this instrument are capitalized. Such terms shall have the meaning set forth in the text or in Section 11.5"
    ),
  ];
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

function getArticleThree() {
  return [
    createHeading("ARTICLE 3 MANAGEMENT OF THE COMPANY, MEETINGS AND VOTING"),
    createSimpleParagraph(
      "3.1",
      "Management by Members",
      "The exclusive authority to manage and control the Company shall be vested in the Member. The Member shall have the sole and exclusive power and authority to bind the Company except to the extent that such power and authority is expressly delegated by the Member, and the delegation of such power and authority shall not reduce the power and authority of the Member. The Member shall be authorized to act on behalf of the Company under the title “Member,” “Chief Executive Officer,” “President,” or any other title or representative capacity deemed appropriate by the Member"
    ),
    createSimpleParagraph(
      "3.2",
      "Officers",
      "The Member may appoint such officers of the Company as the Member may deem appropriate and may remove any such officer at any time with or without cause. The Member may delegate to the Company’s officers such authority as the Member may deem appropriate and subsequently revoke or modify that authority. The Member also may delegate authority to other Persons and revoke that delegation as the Member may deem appropriate, including the power to delegate authority"
    ),
  ];
}

function getArticleFour() {
  return [
    createHeading("ARTICLE 4 CAPITAL CONTRIBUTIONS"),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun("4.1	"),
        new TextRun({
          text: "Agreed Capital Contributions.",
          bold: true,
          underline: {},
        }),
        new TextRun(
          " The Member shall contribute to the capital of the Company the contribution set forth opposite such Member’s name on the attached "
        ),
        new TextRun({
          text: "Exhibit A.",
          underline: {},
        }),
        addBreak(),
      ],
    }),
    createSimpleParagraph(
      "4.2",
      "Additional Capital Contributions",
      "The Member may, but is not required to, make additional contributions to the capital of the Company"
    ),
  ];
}

function getArticleFive() {
  return [
    createHeading("ARTICLE 5 TAXATION AND ALLOCATIONS"),
    createSimpleParagraph(
      "5.1",
      "Tax Status",
      "At all times that the Company has only one Member (who owns 100% of the membership interest in the Company), it is the intention of the Member that the Company be disregarded as an entity separate and apart from the Member for federal, and, to the extent applicable, state, local and foreign income tax purposes"
    ),
  ];
}

function getArticleSix() {
  return [
    createHeading("ARTICLE 6 DISTRIBUTIONS"),
    createSimpleParagraph(
      "6.1",
      "Distributions",
      "Distributions shall be made to the Member at the times and in the amounts determined by the Member, except that no distribution shall be made in violation of the BOC"
    ),
    createSimpleParagraph(
      "6.2",
      "No Distribution upon Withdrawal",
      "Unless otherwise determined by the Member, no distribution shall be paid to the Member upon the Member’s withdrawal in connection with the voluntary assignment of the Member’s entire interest pursuant to Section"
    ),
  ];
}

function getArticleSeven() {
  return [
    createHeading(
      "ARTICLE 7 BANK ACCOUNTS, BOOKS OF ACCOUNT, REPORTS AND FISCAL YEAR"
    ),
    createSimpleParagraph(
      "7.1",
      "Bank Account; Investments",
      "The Member shall establish one or more bank or other financial institution accounts into which Company funds shall be deposited. Funds deposited by the Company into such accounts may be withdrawn in furtherance of the business of the Company or for distribution to the Member pursuant to this Agreement. Pending withdrawal for such purposes, Company funds may be invested in such manner as the Member may determine"
    ),
    createSimpleParagraph(
      "7.2",
      "Books and Records",
      "The books and records of the Company shall be maintained at the Company’s principal office by the Member. The books of the Company, for both tax and financial reporting purposes, shall be kept using the method of accounting selected by the Member"
    ),
    createSimpleParagraph(
      "7.3",
      "Fiscal Year",
      "The Company fiscal year shall be the calendar year"
    ),
  ];
}

function getArticleEight() {
  return [
    createHeading("ARTICLE 8 ASSIGNMENT OF MEMBERSHIP INTEREST"),
    createSimpleParagraph(
      "8.1",
      "Assignment Permitted",
      "The Member may transfer or assign (including as a pledge or other collateral assignment) in whole or in part the Member’s membership interest in the Company"
    ),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun(`8.2	`),
        new TextRun({
          text: `Assignment of Entire Interest.`,
          bold: true,
          underline: {},
        }),
        new TextRun(
          ` In connection with a voluntary transfer or assignment by the Member of the Member’s entire membership interest in the Company (not including a pledge or collateral assignment or any transfer as a result thereof):`
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(`(a)	the Member will cease to be a member of the Company.`),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          `(b)	the assignee will automatically and simultaneously be admitted as the successor Member without any further action at the time the voluntary transfer or assignment becomes effective under applicable law; and`
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          `(c)	the Company shall be continued without requiring a winding up.`
        ),
        addBreak(),
      ],
    }),
    createSimpleParagraph(
      "8.3",
      "Assignment of Partial Interest",
      "In connection with a partial assignment or transfer by the Member of the Member’s membership interest in the Company (not including a pledge or collateral assignment or any transfer as a result thereof), unless this Agreement is amended to reflect the fact that the Company will have more than one Member, the assignee or transferee shall not be admitted as a Member of the Company and shall not have any rights as a Member other than the right to receive any distributions that are payable in respect of the interest transferred"
    ),
  ];
}

function getArticleNine() {
  return [
    createHeading("ARTICLE 9 EXCULPATION, INDEMNIFICATION AND ADVANCEMENT"),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun(`9.1	`),
        new TextRun({
          text: `Exculpation.`,
          bold: true,
          underline: {},
        }),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(`(a)	For purposes of this Agreement, “`),
        new TextRun({
          text: `Covered Person`,
          bold: true,
          underline: {},
        }),
        new TextRun(
          `” means (i) the Member, whether acting in the capacity of owner, governing person, officer, employee, creditor or other relationship to the Company, and (ii) any Person with the power, whether through ownership of voting securities, by contract or otherwise, to direct the actions of the Member.`
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          `(b)	No Covered Person shall be liable to the Company for any loss, damage or claim incurred by reason of any act or omission (whether or not constituting negligence) performed or omitted by the Covered Person in the Covered Person’s capacity as a Covered Person.`
        ),
        addBreak(),
      ],
    }),
    createSimpleParagraph(
      "9.2",
      "Scope of Duties of Covered Persons",
      "No Covered Person shall owe any fiduciary duty to the Company. Without limiting the scope of the preceding sentence, a Covered Person is expressly permitted to engage in or possess an interest in any business venture of any nature or description, independently or with others, similar or dissimilar to the business of the Company, and the Company shall have no rights by virtue of this Agreement in and to such independent ventures or the income or profits derived therefrom, and the pursuit of any such venture, even if competitive with the business of the Company, shall not be deemed wrongful or improper. The Covered Person shall not be obligated to disclose or present any particular opportunity to the Company even if that opportunity is of a character that, if disclosed or presented to the Company, could be taken by the Company, and the Covered Person shall have the right to take for the Covered Person’s own account (individually or as a partner, shareholder, fiduciary or otherwise) or to recommend to others any such particular opportunity"
    ),
    createSimpleParagraph(
      "9.3",
      "Indemnification",
      "A Covered Person shall be entitled to indemnification from the Company for any loss, damage or claim incurred by that Covered Person by reason of any act or omission (whether or not constituting negligence) performed or omitted by that Covered Person in the capacity of a Covered Person. Any indemnity under this Section shall be provided out of and to the extent of Company assets only, and no Member shall have any personal liability on account thereof"
    ),
    createSimpleParagraph(
      "9.4",
      "Expenses",
      "Expenses (including legal fees) incurred by a Covered Person in defending any claim, demand, action, suit or proceeding may, in the sole discretion of the Member, from time to time, be advanced by the Company before the final disposition of the claim, demand, action, suit or proceeding. The Company may enter into indemnity contracts with any Covered Person and the Member may adopt Written procedures pursuant to which arrangements are made for the advancement of expenses and the funding of obligations under this Section and containing other procedures regarding indemnification as are appropriate"
    ),
    createSimpleParagraph(
      "9.5",
      "Insurance",
      "The Company may purchase and maintain insurance, to the extent and in amounts the Member deems reasonable, on behalf of Covered Persons and other Persons as the Member shall determine, against any liability that may be asserted against or expenses that may be incurred by that Person in connection with the activities of the Company, regardless of whether the Company would have the power to indemnify that Person against the liability under this Agreement. The Company shall have no obligation to fund indemnification of any Person to the extent the liability is covered by insurance. The Company’s obligation to fund indemnification of any Person shall commence only after all available insurance has been exhausted"
    ),
    createSimpleParagraph(
      "9.6",
      "Duration of Protection",
      "All provisions of this Article shall apply to any former Member or other Covered Person for all actions or omissions taken while such Member was a Member to the same extent as if that person were still a Member"
    ),
  ];
}

function getArticleTen() {
  return [
    createHeading("ARTICLE 10 WINDING UP"),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun(`10.1	`),
        new TextRun({
          text: `Events Requiring Winding Up.`,
          bold: true,
          underline: {},
        }),
        new TextRun(
          ` The Company shall be wound up only on the first to occur of any one or more of the following:`
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(`(a)	the Written consent of the Member.`),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          `(b)	the occurrence of any event that terminates the continued membership of the Member in the Company unless the legal representative or successor of the Member agrees to continue the Company and appoints a successor Member in accordance with the BOC; or`
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(`(c)	entry of a judicial order to wind up the Company.`),
        addBreak(),
      ],
    }),
    createSimpleParagraph(
      "10.2",
      "Revocation or Reinstatement",
      "A consent to wind up as provided in Section 10.1(a) may only be revoked upon the consent of the Member. In the event of a termination of the Company under the BOC, the Company may be reinstated upon the Written consent of the Member"
    ),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun(`10.3	`),
        new TextRun({
          text: `Winding Up Affairs and Distribution of Assets.`,
          bold: true,
          underline: {},
        }),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          `(a)	If an event requiring the winding up of the Company occurs and is not revoked, the Member, acting as “`
        ),
        new TextRun({
          text: "Liquidating Agent",
          underline: {},
        }),
        new TextRun(
          ",” as soon as practicable shall wind up the affairs of the Company and sell and/or distribute the assets of the Company. The Liquidating Agent is expressly authorized and empowered to execute any and all documents necessary or desirable to effectuate the liquidation and termination of the Company and the transfer of any assets. The Liquidating Agent shall apply and distribute the proceeds of the sale or liquidation of the assets and property of the Company in the following order of priority, unless otherwise required by nonwaivable provisions of applicable law:"
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        left: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          "(i)	to pay (or to make provision for the payment of) all creditors of the Company (including Members who are creditors of the Company), in the order of priority provided by law or otherwise, in satisfaction of all debts, liabilities or obligations of the Company due its creditors;"
        ),
        ...addDoubleBreak(),
        new TextRun(
          "(ii)	after the payment (or the provision for payment) of all debts, liabilities and obligations of the Company in accordance with clause (i) above, any balance remaining shall be distributed to the Member."
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          "(b)	The Liquidating Agent shall have sole discretion to determine whether to liquidate all or any portion of the assets and property of the Company and the consideration to be received for that property."
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          "(c)	If the Company’s property is not sufficient to discharge all of the Company’s liabilities and obligations, the Liquidating Agent shall apply its property, or make adequate provision for the application of its property, to the extent possible, to the just and equitable discharge of its liabilities and obligations, including liabilities and obligations owed to the Member other than for distributions."
        ),
        addBreak(),
      ],
    }),
    createSimpleParagraph(
      "10.4",
      "Termination",
      "On compliance with the distribution plan described in Section 10.3, the Liquidating Agent shall execute, acknowledge and cause to be filed a certificate of termination. Except at otherwise provided by the BOC, the Company shall cease to exist upon the filing of the certificate of termination with the Secretary of State of Texas"
    ),
  ];
}

function getArticleEleven() {
  return [
    createHeading("ARTICLE 11 MISCELLANEOUS PROVISIONS AND DEFINITIONS"),
    createSimpleParagraph(
      "11.1",
      "Entire Agreement",
      "This Agreement supersedes all prior agreements and understandings among the Member with respect to the Company"
    ),
    createSimpleParagraph(
      "11.2",
      "Amendments",
      "The vote or Written consent of the Member is required to amend the certificate of formation of the Company or this Agreement"
    ),
    createSimpleParagraph(
      "11.3",
      "Governing Law",
      "This Agreement shall be governed by and construed in accordance with the law of Texas"
    ),
    createSimpleParagraph(
      "11.4",
      "Binding Effect; No Third-Party Beneficiaries",
      "This Agreement shall be binding upon, and, to the extent provided herein, inure to the benefit of, the signatories of this Agreement and any Members subsequently admitted, their spouses, heirs, devisees, executors, legal representatives, successors, and assigns. Article 9 of this Agreement shall also inure to the benefit of Covered Persons as defined therein. The Members acknowledge and agree that this Agreement is intended to be binding upon and to inure to the benefit of the Company and that the provisions of this Agreement shall be enforceable by and against the Company. The obligations of the Company pursuant to this Agreement are the obligations of the Company only, and absent additional Written agreement, the Member has no personal liability for the obligations of the Company, including any obligations pursuant to Article 9 of this Agreement. No creditor of the Company or of a Member is entitled to or is intended to have third-party beneficiary status to enforce any obligation of any party under this Agreement"
    ),
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun(`11.5	`),
        new TextRun({
          text: `Certain Definitions and Construction.`,
          bold: true,
          underline: {},
        }),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          `(a)	As used in this Agreement, the following terms have the following meanings:`
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        left: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun("(i)	"),
        ...createUnderlinedQuotes("Agreement"),
        new TextRun(
          " means this Company Agreement as it may be amended from time to time as provided herein."
        ),
        ...addDoubleBreak(),
        new TextRun("(ii)	"),
        ...createUnderlinedQuotes("Member"),
        new TextRun(
          " means any Person admitted to the Company as a member as provided in this Agreement but excludes any such Person that has ceased to be a member as provided in this Agreement or the BOC."
        ),
        ...addDoubleBreak(),
        new TextRun("(iii)	"),
        ...createUnderlinedQuotes("Person"),
        new TextRun(
          " means any individual, corporation, partnership, limited liability company, business trust or other entity, series of an entity, or government or governmental agency or instrumentality."
        ),
        ...addDoubleBreak(),
        new TextRun("(iv)	"),
        ...createUnderlinedQuotes("Writing"),
        new TextRun(" or "),
        ...createUnderlinedQuotes("Written"),
        new TextRun(
          " means an expression of words, letters, characters, numbers, symbols, figures or other textual information that is inscribed on a tangible medium or that is stored in an electronic or other medium that is retrievable in a perceivable form. Unless the context requires otherwise, the term: (1) includes stored or transmitted electronic data, electronic transmissions, and reproductions of Writings; and (2) does not include sound or video recordings of speech other than transcriptions that are otherwise “Writings.”"
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        firstLine: LIST_INDENT_LEVEL,
      },
      children: [new TextRun(`(b)	In this Agreement:`), addBreak()],
    }),
    new Paragraph({
      indent: {
        left: LIST_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          "(i)	Terms defined in the singular have the corresponding meaning in the plural and vice versa."
        ),
        ...addDoubleBreak(),
        new TextRun(
          "(ii)	All pronouns and any variations thereof contained herein shall be deemed to refer to the masculine, feminine, neuter, singular or plural, as the identity of the Person or Persons may require."
        ),
        ...addDoubleBreak(),
        new TextRun(
          "(iii)	The word “include” and its derivatives means “include without limitation.”"
        ),
        ...addDoubleBreak(),
        new TextRun(
          "(iv)	References to Articles, Sections and Exhibits are to the specified Articles and Sections of, and Exhibits to, this Agreement unless the context otherwise requires. Each Exhibit to this Agreement is made a part of this Agreement for all purposes."
        ),
        ...addDoubleBreak(),
        new TextRun(
          "(v)	References to statutes or regulations are to those statutes or regulations as currently amended and to the corresponding provisions as they may be amended or superseded in the future."
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: "[Signature Page Follows.]",
        }),
        new PageBreak(),
      ],
      alignment: AlignmentType.CENTER,
    }),
  ];
}

function getSignaturePage() {
  return [
    new Paragraph({
      indent: {
        firstLine: PARAGRAPH_INDENT_LEVEL,
      },
      children: [
        new TextRun(
          "IN WITNESS WHEREOF, the undersigned Member has duly executed this Agreement as of the day and year first above written."
        ),
        addBreak(),
      ],
    }),
    new Paragraph({
      indent: {
        left: LIST_INDENT_LEVEL * 3,
      },
      children: [
        new TextRun("MEMBER:"),
        addBreak(),
        ...addDoubleBreak(),
        new TextRun({ text: "							", underline: {} }),
        ...addDoubleBreak(),
        new TextRun("Print:"),
        addBreak(),
        new PageBreak(),
      ],
    }),
  ];
}

function getExhibitA() {
  return [
    createHeading("EXHIBIT A"),
    new Table({
      alignment: AlignmentType.CENTER,
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      rows: [
        new TableRow({
          tableHeader: true,
          children: [
            new TableCell({
              width: {
                size: 50,
                type: WidthType.PERCENTAGE,
              },
              borders: {
                top: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 3,
                  color: "black",
                },
                left: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
                right: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
              },
              children: [new Paragraph("Member Name and Address")],
            }),
            new TableCell({
              width: {
                size: 25,
                type: WidthType.PERCENTAGE,
              },
              borders: {
                top: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 3,
                  color: "black",
                },
                left: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
                right: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
              },
              children: [new Paragraph("Percentage")],
            }),
            new TableCell({
              width: {
                size: 25,
                type: WidthType.PERCENTAGE,
              },
              borders: {
                top: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 3,
                  color: "black",
                },
                left: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
                right: {
                  style: BorderStyle.NONE,
                  size: 0,
                  color: "white",
                },
              },
              children: [new Paragraph("Capital Contribution")],
            }),
          ],
        }),
      ],
    }),
  ];
}

function generate() {
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
            // TODO Add Company Name
            text: "[NAME]",
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
            text: "This Company Agreement (this “Agreement”), dated effective ",
          }),
          //TODO Add actual Document Date!
          new TextRun("_______________ ____, 20____ [DATE], "),
          new TextRun(
            "is executed and agreed to, for good and valuable consideration, by the initial Member listed on "
          ),
          new TextRun({
            text: "Exhibit A.",
            underline: {},
          }).break(),
        ],
      }),
      // ARTICLE 1
      ...getArticleOne(),
      // ARTICLE 2
      ...getArticleTwo(),
      // ARTICLE 3
      ...getArticleThree(),
      // ARTICLE 4
      ...getArticleFour(),
      // ARTICLE 5
      ...getArticleFive(),
      // ARTICLE 6
      ...getArticleSix(),
      // ARTICLE 7
      ...getArticleSeven(),
      // ARTICLE 8
      ...getArticleEight(),
      // ARTICLE 9
      ...getArticleNine(),
      // ARTICLE 10
      ...getArticleTen(),
      // ARTICLE 11
      ...getArticleEleven(),
      // SIGNATURE PAGE
      ...getSignaturePage(),
      // EXHIBIT A
      ...getExhibitA(),
    ],
  });

  // // Used to export the file into a .docx file
  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, "example.docx");
  });

  // Create document
}

export default generate;
