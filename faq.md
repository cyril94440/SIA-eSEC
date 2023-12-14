## CATEGORY 1: THE ESEC EVALUATION MODEL

### How can I use the eSEC evaluation tool (use cases)?

- eSEC can be used to assess existing ID documents (already issued and in circulation) or future ones (projects of modernisation). Or even purely fictitious documents (e.g. marketing samples used for demos, which – we should have this in mind – are not always intended to be fully representative of a real potential ID document).
- eSEC can be used by many populations: document examination experts; document designers; project management teams...
- eSEC can be used within different organizations: issuing authorities; law enforcement bodies; international organisations involved in capacity building (e.g. training on how documents are made); document manufacturers and suppliers to the security industry...
- eSEC can be used in the frame of a project or just to understand and learn some basics about document security, like what is required to build a ‘secure eDocument’.

### Who created the eSEC model, who is behind?

- The eDocument Scheme for Evaluating Physical Security (eSEC) has been designed by the SIA’s Document Security Working Group and other experts of the ID documents sector to help governments develop secure eDocuments. Hence, behind eSEC are various experts from the industry (document manufacturers, security components providers...) and other ones from national or international bodies, who have been consulted in the conception and testing phases. This collaboration enabled us to define how the security features should be selected and ranked (the database), how the scoring should be calculated and displayed (the algorithm), how one should be able to navigate while working on an eSEC project (user experience), how the user and projects data shall be managed (security, privacy)...
- eSEC was first launched in 2018. The new version has been made available to early users in 2023.

### What was the process to rank security features?

- We first made a large selection of security features, gathering them within categories - as far as possible and setting basic rules; for example, a feature which is not yet available and used in the market (in any ID document) is not part of the eSEC model database. Similarly, a feature which is not used any more has no reason to be selected in the eSEC database.
- Then we organised several rounds of discussions to rank the features, using sub-scores (e.g. “power” of the feature to fight and detect counterfeiting or forgery attempts). Several experts from SIA and external bodies contributed to find a balanced and fair consensus – we expected it to be very challenging and indeed it was.
- In the end the eSEC ranking provides guidance for document security, helpful to many; of course it has some limits, because there is no perfect model.
- Two major assumptions are made and communicated to eSEC users: first, we have to collectively assume that the document is designed and manufactured working only with suppliers of good quality security features and components, produced in relevant security conditions. Second, it is assumed that the ID document is conceived with good security designers, knowing how to embed the security features in the document design – there are many best practices used in the industry, we consider that they are actually put in practice.

### What has evolved between eSEC 1.0 (2018) and eSEC 2.0 (2023)?

- The team behind eSEC 2.0 worked on several topics: the database (mainly adding new features in the eSEC model), users and projects data management (security and privacy rules), the user experience (eSEC aims at being a convenient tool), transparency (how we openly disclose to users information about the model). We also thought about new functionalities, the first one being the possibility to evaluate if the document follows some international Standards And Recommended Practices (SARPs) set by ICAO in its Doc 9303\*, with a focus on basic security features.

* Part 2: Specifications for the Security of the Design, Manufacture and Issuance of MRTDs

- eSEC was developed with the valuable support of document security experts working for law enforcement, issuing authorities... or as independent consultants.

### How often is the model updated?

- We know that document fraud is evolving every day; and new security features are made available also regularly.
- We have the ambition to update the model on a yearly basis, together with a group of experts interested in the process.
- The online tool makes it quite easy for us to have the model evolving, changing only one parameter if needed.

### [asked by NTWG] How is the integration of the security feature being assessed in the tool?

- NTWG question: the tool seems more or less to “count” the number of security features. But the real value of a security feature comes from the integration into the card body or ideally with personalized data. For example – to put a laser printed personalization on top of a really good hologram is not what you want to see. So, how is the integration of the security feature being assessed in the tool?
- eSEC Task Force answer: This is indeed a complex topic and covering all the nuances of evaluating the security of a document is likely beyond any automated tool.
  While designing the tool, we have tried our best to cover everything, but as said it can never be perfect – the tool provides guidelines (indications) to help assessing and designing better documents. This assistance cannot replace experts know-how and decisions (similarly to Doc 9303 recommendations).
  Firstly we wish to remind that we do not simply calculate the security features, but we also give different value for them depending how strong they are and how they protect against different attacks on the document. E.g. alteration of the photo. We also list security features that are done during personalization phase etc.
  Having a balanced set of features is already an indication that the design of the document is on the right track.
  The essence of your question is likely that is the tool evaluating how intelligently the security features are used. E.g. having one security feature that protects another one, increase the value of both. Or having a security feature placed in a way that it protects the personalization instead a less valuable part of the document.
  We do not have anything in the tool that would be able to evaluate the design directly. But among the guidance provided, we do have the list of questions related to the design process. How it was done, who was involved, what tools were used etc. This was the level of detail we thought would be usable in an self-evaluation tool.

### [asked by NTWG] The tool seems to assess “only” physical security features. How about the chip?

eSEC Task Force answer: The origin of the tool is the realization that there is no commonly agreed method to evaluate the physical security of the document.
We didn’t want to create anything that would compete with something that is already available and well-established.
For the chip security we felt that the standards and specifications are actually fairly straight forward and there is very limited set of choices to make.
And that the Common Criteria methodology and the protection profiles created for the chip of most governmental documents are covering this part very well.

### [asked by NTWG] Are there weights (weighting factors) between categories, how do they influence on the score and can they be changed by the user of the software tool to accommodate his/her preferences?

SIA: There are some weights used inside the tool.

On the highest level we value the 4 main fields the tool evaluates like this:

- How widely security features are distributed across different parts of the document                15%
- How strongly the document is protected against different attacks                                                    35%
- How well different security feature levels are represented in the document                                  20%
- The design process of the overall document                                                                                              30%

There are also some weights use at lower levels of the score calculation. E.g. level 1 security features
are value more than level 2 and 3.

Currently we do not have plans to allow the user the change these rates for each evaluation they do.

However the plan is to be fully transparent on how the algorithm works and possibly changing the weights
on the tool itself during the scheduled reviews (future versions of the tool, optimized with relevant
experts – see your question about update policy).

However, allowing the user to change these weight for their own is definitely something we could add.

### [asked by NTWG] How does the tool assess features in VIS (white light), UV, and IR spectral range and the combination?

SIA: We treat all security features the same way. We categorize them and given them value against threats
and how easy it is to verify them under VIS, UV and/or IR spectral ranges (some features are multi-level,
the algorithm takes it into account).

In the current database we have e.g. the following security features:

– IR drop-out inks
– Multi-color visible and UV reactive fibres
– UV dull substrate material
– UV: 2 or more colors
– UV: Bi-flourescent ink
– UV: True color images

### [asked by NTWG] How does the tool assess features designed for optical machine authentication (see ICAO Doc 9303 Annex on OMA)?

SIA: For each feature we have a value for how easy it is to verify with different methods and on the overall score/ranking we value that all verification methods are covered within the document. In the current database we have Automated Border Control (ABC) as one of the methods.

### How can I know if my document follows ICAO standards and recommendations?

- The tool is designed to offers guidance toward the basic Doc 9303 compliance, with a focus on basic security features. The system is currently limited to ICAO Doc 9303, Part 2 — Specifications for the Security of the Design, Manufacture and Issuance of MRTDs.
- eSEC 2.0 was designed with the collaboration of ICAO NTWG (author of the Doc 9303).
- Disclaimer: eSEC is not a compliance program; it just provides useful guidelines and does not replace a deeper analysis by a specialist in accordance with Doc 9303 (members of SIA can help if needed).

### [asked by NTWG] What is exactly considered (assessed) when stating ICAO 9303 compliance? What about EU2252/2004 compliance (minimum security standards for Eu passports – similar important but not identical)?

- On purpose, we decided to avoid using the word “compliance” (see previous question).
- In addition to ICAO Doc 9303 (part 2), our plan is to have various « standard targets » in the tool. This is something that the user can choose against the standard of their choice. We have identified several possible standards that will be available in the dashboard.

### [asked by NTWG] How do you deal with comparable features (e.g. DID (by SURYS) vs RICS (by OVD Kinegram)?

We avoid referring directly to any suppliers products, but instead describe the security feature in a generic way.
If there is a way to distinguish them technically or functionally we do it. E:g. the UV-colors in the earlier question. 
We do recognize that there are products of varying quality and security available in the market that easily fall with the same specification (same type of features).
But despite this we do not value one suppliers product over another one as it is very difficult to do objectively.
As a result, the model is assuming that all the security features selected are of good quality and well embedded, using the industry best practices.

### [asked by NTWG] How about comparability? I.e., if you give the same (specimen) document to, say, 5 different testers (ideally of the similar level of expertise/training) – would they come up with the same/similar result?

That is the goal. And to achieve it, we will need to be clear on the naming and descriptions inside the tool (i.e. short names + longer description of features made available). Our early adopter user group is aimed to play with the beta version, helping to verify if they do get similar results.

### Can I create and add my own security features?

Not in this in the eSEC version 2.0.

### What about the cost of the security features (which has an impact on the cost of documents)?

The eSEC model does not mention that, which would be nearly impossible to take into account suitably in the model. For example, the cost of features like security paper, DOVIDs and microchips can vary a lot according to the quantity ordered by document manufacturers.
In addition, SIA members are not allowed to talk about prices between them.
Of course, SIA members can provide information on their own; you can consult any of them according to their specialities.

### How many different documents can I create with my account?

There are not limits for document creation. The user is encouraged to save each project using the bespoke menu. Each project can be reopen, modified and completed freely.
It is important to know that the output .esec files are encrypted with a very robust encryption key: this key is created with the password used during the saving/export procedure.
Important reminder: Do not forget your password as there is not way to recover it in case of loss.

## CATEGORY 2: SECURITY AND PRIVACY

### Where is the data (hosting) and who can access it?

The eSEC tool is hosted at Scaleway, like other SIA websites, on SIA servers, in Europe (France).
We have to distinguish the users data (you) and the projects data (ID documents evaluated).
The SIA Executive Director (non-vendor actor) is the only person with admin rights and ability to see the full list of users. SIA members have no access to this.
The data of a given project can only be accessed by the user of the account creating the said project. The project data is not stored on the eSEC tool and is lost when you log out; so the only way to access project data again is to save it in an .esec file (encrypted), to be exported (downloaded) and uploaded again (using eSEC interface). Users can share their private .esec files in confidence, on their own responsibility, with suitable means, like they would share any confidential file.

### Who will know if I create an account?

The SIA Executive Director (non-vendor actor) is the only person with admin rights and ability to see the full list of users.
SIA members have no access to this information.

### How long will the data remain in the database?

We have to distinguish the users data (you) and the projects data (ID documents evaluated).
User data is in a database only accessible through SIA server. Users’ passwords are encrypted.
For security and privacy purposes, no project data is retained in any database. Only the .esec exported file will carry the project information locally. Temporary data (projects): nothing is stored on eSEC tool (SIA server); security features are sent and used by the algorithm (on SIA server) to provide scores but anonymously (the project is not identified) and without being saved (everything is erased and “forgotten” when you log out or close the browser).

### How can I close my account and delete the data?

To delete your account, just send an email request to the SIA Executive Director.

## CATEGORY 3: OTHER

### How can I know what are the security features used on existing documents?

- If you don’t have a physical specimen in your hands, you can use the reference databases.
- Some of these are public (open free consultation) and provide basic information. The most commonly know open databases are PRADO and EdisonTD.
- Some reference systems require special rights to access to some level of information (i.e. high quality images, security features and details demanding a real “need to know”...). In general, they are only available to some populations (typically, law enforcement experts).
- Some are only available with a yearly subscription.
- Testing Keesing Documentchecker is for free.
