import { NextPage } from "next";
import Head from "next/head";
import { formatPageTitle } from "@@core/base";
import { AppLayout } from "@@view/containers";
import * as styles from "./styles";
import { Collapsible } from "view/components/Collapsible";

export const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>{formatPageTitle("FAQ")}</title>
      </Head>
      <AppLayout mainCss={styles.root}>
        <div css={styles.pageTitle}>Frequently Asked Questions</div>
        <div css={styles.pageDescription}>
          {
            "Explore our FAQ page for clear answers to common questions on a variety of topics. Designed for anyone seeking clarity, our explanations are both accurate and straightforward. Dive in to satisfy your curiosity!"
          }
        </div>
        <div css={styles.categoryTitle}>CATEGORY 1: THE ESEC EVALUATION MODEL</div>
        <Collapsible title="How can I use the eSEC evaluation tool (use cases)?">
          <ul>
            <li>
              eSEC can be used to assess existing documents (already issued and in circulation) or future ones (projects
              of modernisation). Or even purely fictitious documents (e.g. marketing samples used for demos, which – we
              should have this in mind – are not always intended to be fully representative of a real potential
              document)
            </li>
            <li>
              eSEC can be used by many populations: document examination experts; document designers; project management
              teams... within different organizations: issuing authorities; law enforcement bodies; international
              organisations involved in capacity building (e.g. training on how documents are made); document
              manufacturers and suppliers to the security industry...
            </li>
            <li>eSEC can be used in the frame of a project or just to learn some basics about document security</li>
          </ul>
        </Collapsible>
        <Collapsible title="Who created the eSEC model, who is behind?">
          <ul>
            <li>back to 2918 and even before</li>
            <li>2022 update</li>
          </ul>
        </Collapsible>
        <Collapsible title="What was the process to rank security features?">
          <ul>
            <li>
              Several experts from SIA and external contributed to find a balanced and fair consensus – we expected it
              to be very challenging and indeed it was.
            </li>
            <li>The ranking provides guidance, of course it has limits; because there is no perfect model</li>
            <li>We assume you have good quality suppliers and security features</li>
            <li>We assume you work with good security designers when embedding the SF</li>
          </ul>
        </Collapsible>
        <Collapsible title="What has evolved between eSEC 1.0 (2018) and eSEC 2.0 (202X)?">
          <ul>
            <li>
              The team behind eSEC 2.0 worked on several topics
              <ol>
                <li>user experience (UX)</li>
                <li>...</li>
                <li>security [we shall be careful for this topic]</li>
              </ol>
            </li>
            <li>
              eSEC was developed with the valuable support of document security experts working for law enforcement,
              issuing authoties... or as independant consultants.
            </li>
          </ul>
        </Collapsible>
        <Collapsible title="How often is the model updated?">
          <>
            <ul>
              <li>
                We know that document fraud is evolving every day; and new security features are made available also
                regularly
              </li>
              <li>We have the ambition to update the model on a yearly basis, together with a group of experts</li>
              <li>
                The online tool makes it very easy to have the model evolving, changing only one parameter if needed
              </li>
              <li>
                With the premium version you have the possibility to add your own features, if needed; this is xxx
              </li>
            </ul>
            <div css={styles.highlight}>
              SIA [answer to NTWG]: At the moment we have no process or schedule in place, but the plan is to establish
              one. The current idea is to do an annual (or more frequent) update where the SIA member, the user group
              and possibly other interest groups can work together.
            </div>
          </>
        </Collapsible>
        <Collapsible
          title="[asked by NTWG] Integration of security features:
the tool seems more or less to “count” the number of security features. But the real value of a security feature comes from the integration into the card body or ideally with personalized data. For example – to put a laser printed personalization on top of a really good hologram is not what you want to see. So, how is the integration of the security feature being assessed in the tool?"
        >
          <>
            <div css={styles.highlight}>
              SIA: This is indeed a complex topic and covering all the nuances of evaluating the security of a document
              is likely beyond any automated tool. While designing the tool, we have tried our best to cover everything,
              but as said it can never be perfect – the tool provides guidelines (indications) to help assessing and
              designing better documents. This assistance cannot replace experts know-how and decisions (similarly to
              Doc 9303 recommendations).
            </div>
            <br />
            <div css={styles.highlight}>
              Firstly we wish to remind that we do not simply calculate the security features, but we also give
              different value for them depending how strong they are and how they protect against different attacks on
              the document. E.g. alteration of the photo. We also list security features that are done during
              personalization phase etc. Having a balanced set of features is already an indication that the design of
              the document is on the right track.
            </div>
            <br />
            <div css={styles.highlight}>
              The essence of your question is likely that is the tool evaluating how intelligently the security features
              are used. E.g. having one security feature that protects another one, increase the value of both. Or
              having a security feature placed in a way that it protects the personalization instead a less valuable
              part of the document. We do not have anything in the tool that would be able to evaluate the design
              directly. But among the guidance provided, we do have the list of questions related to the design process.
              How it was done, who was involved, what tools were used etc. This was the level of detail we thought would
              be usable in an self-evaluation tool.
            </div>
          </>
        </Collapsible>
        <Collapsible title="[asked by NTWG] The tool seems to assess “only” physical security features. How about the chip?">
          <>
            <div css={styles.highlight}>
              SIA: The origin of the tool is the realization that there is no commonly agreed method to evaluate the
              physical security of the document.
            </div>
            <div>
              <br />
              We didn’t want to create anything that would compete with something that is already available and
              well-established.
            </div>
            <div>
              <br />
              For the chip security we felt that the standards and specifications are actually fairly straight forward
              and there is very limited set of choices to make.
            </div>
            <div>
              <br />
              And that the Common Criteria methodology and the protection profiles created for the chip of most
              governmental documents are covering this part very well.
            </div>
            <div>
              <br />
              <span css={styles.red}>Question from SIA</span>: Would such an answer from SIA be acceptable in the FAQ
              section? Otherwise, what would be the minimum the tool should enable to assess?
            </div>
          </>
        </Collapsible>
        <Collapsible title="[asked by NTWG] Are there weights (weighting factors) between categories, how do they influence on the score and can they be changed by the user of the software tool to accommodate his/her preferences?">
          <>
            <div css={styles.highlight}>SIA: There are some weights used inside the tool.</div>
            <div css={styles.highlight}>
              On the highest level we value the 4 main fields the tool evaluates like this:
              <ul>
                <li>
                  How widely security features are distributed across different parts of the document                15%
                </li>
                <li>
                  How strongly the document is protected against different attacks                                      
                              35%
                </li>
                <li>
                  How well different security feature levels are represented in the
                  document                                 20%
                </li>
                <li>
                  The design process of the overall
                  document                                                                                            
                  30%
                </li>
              </ul>
            </div>
            <br />
            <div css={styles.highlight}>
              There are also some weights use at lower levels of the score calculation. E.g. level 1 security features
              are value more than level 2 and 3.
            </div>
            <br />
            <div css={styles.highlight}>
              Currently we do not have plans to allow the user the change these rates for each evaluation they do.
            </div>
            <br />
            <div css={styles.highlight}>
              However the plan is to be fully transparent on how the algorithm works and possibly changing the weights
              on the tool itself during the scheduled reviews (future versions of the tool, optimized with relevant
              experts – see your question about update policy).
            </div>
            <br />
            <div css={styles.highlight}>
              However, allowing the user to change these weight for their own is definitely something we could add.
            </div>
          </>
        </Collapsible>
        <Collapsible
          title={
            "[asked by NTWG] How does the tool assess features in VIS (white light), UV, and IR spectral range and the combination?"
          }
        >
          <>
            <div css={styles.highlight}>
              SIA: We treat all security features the same way. We categorize them and given them value against threats
              and how easy it is to verify them under VIS, UV and/or IR spectral ranges (some features are multi-level,
              the algorithm takes it into account).
            </div>
            <br />
            <div css={styles.highlight}>
              In the current database we have e.g. the following security features:
              <ul>
                <li>IR drop-out inks (in personalization)</li>
                <li>Infrared Drop-Out Inks</li>
                <li>Infrared Fluorescent Inks</li>
                <li>Metachromic Ink</li>
                <li>Multi-color visible and UV reactive fibres</li>
                <li>UV dull substrate material</li>
                <li>UV: 2 or more colors</li>
                <li>UV: Bi-flourescent ink</li>
                <li>UV: Blue</li>
                <li>UV: non-Blue</li>
                <li>UV: True color images</li>
              </ul>
            </div>
          </>
        </Collapsible>
        <Collapsible title="[asked by NTWG] How does the tool assess features designed for optical machine authentication (see ICAO Doc 9303 Annex on OMA)?">
          <div css={styles.highlight}>
            SIA: For each feature we have a value for how easy it is to verify with different methods and on the overall
            score/ranking we value that all verification methods are covered within the document. In the current
            database we have Automated Border Control as one of the methods. And in the update that we are working right
            now we are adding a more generic machine verification aspect.
          </div>
        </Collapsible>
        <Collapsible title="Can I chose a target to be reached (global scoring after evaluating a given document)?">
          YES
        </Collapsible>
        <Collapsible title="How can I know if my document is ICAO compliant?">
          <ul>
            <li>the tool offers some guidance</li>
            <li>currently limited to Doc 9303, part 2 (physical security features for travel documents)</li>
            <li>link to other reference documentation</li>
            <li css={styles.red}>eSEC 2.0 was designed with the collaboration of NTWG (author of the Doc 9303)</li>
            <li>
              disclaimer: eSEC provides guidelines and doesn’t replace a deeper analysis by a specialist of Doc 9303
              (members of SIA can help if needed)
            </li>
          </ul>
        </Collapsible>
        <Collapsible title="[asked by NTWG] What is exactly considered (assessed) when stating ICAO 9303 compliance? What about EU2252/2004 compliance (minimum security standards for Eu passports – similar important but not identical)?">
          <div css={styles.highlight}>
            SIA: Our plan is that you can add these compliancy verification options into the tool in the future. This is
            something that the user can then choose to do (or not) against the standard of their choice. We have
            identified several possible standards that we could add. However, none of them are implemented at this time.
            The two you mentioned are among the few priorities, collaboration with NTWG will help.
          </div>
        </Collapsible>
        <Collapsible title="[asked by NTWG] How do you deal with comparable features (e.g. DID (by Hologram Industries) vs RICS (by OVD Kinegram)?">
          <>
            <div css={styles.highlight}>
              SIA: We avoid referring directly to any suppliers products, but instead describe the security feature in a
              generic way.
              <br />
              <br />
              If there is a way to distinguish them technically or functionally we do it. E:g. the UV-colors in the
              earlier question.
              <br />
              <br />
              We do recognize that there are products of varying quality and security available in the market that
              easily fall with the same specification.
              <br />
              <br />
              But despite this we do not value one suppliers product over another one as it is very difficult to do
              objectively.
              <br />
              <br />
              What we do plan to do is explain the model and give recommendations. E.g. the model is assuming that all
              the security features selected are of good quality.
              <br />
              <br />
              While we will also highlight that selecting a lower quality feature as one of the central security feature
              is likely to impact your security despite the value given by the tool.
              <br />
              <br />
              <span css={styles.red}>
                Again, we hope this kind of explanation will be acceptable in the FAQ section.
              </span>
            </div>
          </>
        </Collapsible>
        <Collapsible title="[asked by NTWG] Coming back to the EU regulation EU 2252/2004 which is binding law for all EU 26. There the minimum security requirements are divided into categories: material (substrate), security printing, copy protection, personalization and numbering. Security features have to be in all those areas. How about using this structure in the tool?">
          <div css={styles.highlight}>
            SIA: At the moment we are not doing exactly the same, but there are great similarities in the spirit of the
            regulation and the tool.
            <br />
            <br />
            E.g. most of the categories listed there have a direct equivalent in the eSEC tools location for security
            features.
            <br />
            <br />
            And the tool is verifying that you have a good set of features in each location. While the copy protection
            is close to one of the 11 threats we check.
            <br />
            <br />
            Our tool needs to work with all document and regulations and to establish this we are often going into more
            details than the regulations.
            <br />
            <br />
            <span css={styles.red}>Question from SIA</span>: Who do you think we should talk with when it comes to this
            EU 2252/2004 regulation (so the tool makes it easier to ensure compliancy)?
          </div>
        </Collapsible>
        <Collapsible title="[asked by NTWG] How about comparability? I.e., if you give the same (specimen) document to, say, 5 different testers (ideally of the similar level of expertise/training) – would they come up with the same/similar result?">
          <div css={styles.highlight}>
            SIA: That is the goal. And to achieve it, we will need to be clear on the naming and descriptions inside the
            tool (i.e. short names + longer description of features when users scroll on the name). Our early adopter
            user group will play with the prototype, it will help to verify if they do get similar results.
          </div>
        </Collapsible>
        <Collapsible title="Can I create and add my own security features?">
          this will depend on the version: basic (nok) or premium (ok)
        </Collapsible>
        <Collapsible title="What about the cost of the security features (which has an impact on the cost of documents)?">
          <ul>
            <li>
              the eSEC model doesn’t mention that, which would be nearly impossible to ~modelize (for example, the cost
              of features like security paper, DOVIDs and microchips can vary a lot according to the quantity ordered by
              document manufacturers)
            </li>
            <li>in addition, SIA members are not allowed to talk about prices between them</li>
            <li>
              of course, SIA members can provide information on their own, you can consult any of them according to
              their specialities
            </li>
          </ul>
        </Collapsible>
        <div css={styles.categoryTitle}>CATEGORY 2: BASIC AND PREMIUM VERSIONS/FEATURES</div>
        <Collapsible title="What are the differences between basic and premium versions?">
          Here is a table with the available functionalities <span css={styles.red}>[insert once table ready]</span>
        </Collapsible>
        <Collapsible title="How many different documents can I create with my account?">
          it depends on the version of eSEC you use (basic or premium)
          <span css={styles.red}>[insert once table ready]</span>
        </Collapsible>
        <div css={styles.categoryTitle}>CATEGORY 3: SECURITY AND PRIVACY</div>
        <Collapsible title="Where is the data (hosting) and who can access it?">
          <ul>
            <li>
              hosting = xxx <span css={styles.red}>[we must provide guarantees]</span>
            </li>
            <li>data stored online is fully encrypted; it means xxx</li>
            <li>
              this global security has been audited by xxx [! There will be a cost if we want the solution to be
              audited], a guarantee of data security
            </li>
            <li>Your IT specialists can contact us for further details</li>
          </ul>
        </Collapsible>
        <Collapsible title="Who will know if I create an account?">
          <ul>
            <li>
              only the Secretary of SIA [i.e. Stéphanie de Labriolle] and the tool IT administrator [i.e. ??] can know,
              if needed
            </li>
            <li>
              SIA members will not know, except you let them know{" "}
              <span css={styles.red}>[we must provide guarantees about that]</span>
            </li>
          </ul>
        </Collapsible>
        <Collapsible title="How long will the data remain in the database?">
          <></>
        </Collapsible>
        <Collapsible title="How can I extract the data?">
          <></>
        </Collapsible>
        <Collapsible title="How can I close my account and delete the data?">
          <></>
        </Collapsible>
        <div css={styles.categoryTitle}>CATEGORY 4: OTHER</div>
        <Collapsible title="How can I know what are the security features used on existing documents?">
          <ul>
            <li>if you don’t have a physical specimen in your hands, you can use the reference databases.</li>
            <li>some of these are public (open free consultation) and provide basic information</li>
            <li>
              some require special rights to access to some level of information (i.e. high quality images, security
              features and details demanding a real “need to know”...). In general, they are only available to some
              populations (typically, law enforcement experts).
            </li>
            <li>links toward open databases (e.g. Edison TD and PRADO)</li>
            <li>some are available with a yearly subscription</li>
            <li>testing Keesing Documentchecker is for free</li>
          </ul>
        </Collapsible>
      </AppLayout>
    </>
  );
};
