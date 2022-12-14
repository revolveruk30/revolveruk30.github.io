<html>
<title>SANS Notes</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="w3.css">
<link rel="stylesheet" href="w3-theme-black.css">
<link rel="stylesheet" href="roboto.css">
<link rel="stylesheet" href="font-awesome.min.css">


<style>
html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif;}
.w3-sidebar {
  z-index: 3;
  width: 350px;
  top: 35px;
  bottom: 0;
  height: inherit;
  text-align: justify;}
</style>

<body>

<!-- Topbar -->
<div class="w3-top">
  <div class="w3-bar w3-theme w3-top w3-left-align w3-small">
    <a class="w3-bar-item w3-theme-l1"><i class="fa fa-bars"></i></a>
  </div>
</div>

<!-- Sidebar -->
<nav class="w3-sidebar w3-bar-block w3-collapse w3-small w3-theme-l5" id="mySidebar">
  <a class="w3-button w3-hover-black" href="cole.html">SEC 401 - Security Essentials, Cole</a>
  <a class="w3-button w3-hover-black" href="beaupre.html">SEC 460 - Threat/Vulnerability Management, Beaupre</a>
  <a class="w3-button w3-hover-black" href="cole2.html">SEC 501 - Enterprise Defender, Cole</a>
  <a class="w3-button w3-hover-black" href="brenton.html">SEC 502 - Perimeter Protection, Brenton</a>
  <a class="w3-button w3-hover-black" href="novak.html">SEC 503 - Intrusion Detection, Novak</a>
  <a class="w3-button w3-hover-black" href="strand.html">SEC 504 - Hacker Tools, Strand</a>
  <a class="w3-button w3-hover-black" href="pomeranz.html">SEC 506 - Linux/Unix Security, Pomeranz</a>
  <a class="w3-button w3-hover-black" href="hoelzer.html">SEC 507 - Auditing Networks, Hoelzer</a>
  <a class="w3-button w3-hover-black" href="misenar.html">SEC 511 - Continuous Monitoring, Misenar</a>
  <a class="w3-button w3-hover-black" href="skoudis.html">SEC 517 - Cutting Edge Hacking Techniques, Skoudis</a>
  <a class="w3-button w3-hover-black" href="strand2.html">SEC 550 - Offensive Countermeasures, Strand</a>
  <a class="w3-button w3-hover-black" href="henderson.html">SEC 555 - SIEM with Tactical Analytics, Henderson</a>
  <a class="w3-button w3-hover-black" href="skoudis2.html">SEC 560 - Network Penetration Testing, Skoudis</a>
  <a class="w3-button w3-hover-black" href="wright.html">SEC 561 - Hands-On Hacking Techniques, Wright</a>
  <a class="w3-button w3-hover-black" href="vest.html">SEC 564 - Red Team Operations, Vest</a>
  <a class="w3-button w3-hover-black" href="tarala.html">SEC 566 - Implementing Critical Security Controls, Tarala</a>
  <a class="w3-button w3-hover-black" href="baggett.html">SEC 573 - Automating InfoSec with Python, Baggett</a>
  <a class="w3-button w3-hover-black" href="buggenhout.html">SEC 599 - Defeating Advanced Adversaries, Buggenhout</a>
  <a class="w3-button w3-hover-black" href="wright2.html">SEC 617 - Wireless Ethical Hacking, Wright</a>
  <a class="w3-button w3-hover-black" href="searle.html">SEC 642 - Web App Penetration Testing, Searle</a>
  <a class="w3-button w3-hover-black" href="sims.html">SEC 660 - Advanced Penetration Testing, Sims</a>
  <a class="w3-button w3-hover-black" href="sims2.html">SEC 760 - Advanced Exploit Development, Sims</a>
  <a class="w3-button w3-hover-black" href="lee.html">FOR 408 - Windows Forensic Analysis, Lee</a>
  <a class="w3-button w3-hover-black" href="lee2.html">FOR 508 - Incident Response Forensics, Lee</a>
  <a class="w3-button w3-hover-black" href="hagen.html">FOR 572 - Advanced Network Forensics, Hagen</a>
  <a class="w3-button w3-hover-black" href="zeltser.html">FOR 610 - Reverse-Engineering Malware, Zeltser</a>
  <a class="w3-button w3-hover-black" href="cole3.html">MGT 414 - CISSP, Cole</a>
</nav>

<div class="w3-main" style="margin-left:350px">
  <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h2 class="w3-text-teal"></h2>

<h2>
    Security Essentials, Eric Cole
</h2>
<h3>
    Lecture 1: Defense-in-Depth
</h3>
<p>
    <strong><mark>Network security</strong></mark>
    is a comprehensive, integrated approach in which multiple solutions are
    tiered together to accomplish a goal. There is no single security solution
    that will make an organization secure, because any single measure could be
    bypassed or compromised. When it comes to network security there is no
    silver bullet. Multiple measures that complement each other must be put in
    place across a variety of control options. Even if one of the measures
    failed, the other measures would be able to detect the attack before there
    was a problem - or catch an attack in action - to minimize the amount of
    damage caused.
</p>
<p>
    <em>
        There is no single technology that will make you secure. Any single
        technology can be defeated. Even if we had a ???silver bullet??? it would
        not be a good idea to use it because it would serve as a single point
        of failure that would give attackers a single point of focus. We want
        to put security throughout our organization.
    </em>
</p>
<p>
    <em>
        Defense-in-depth should incorporate both preventive and detective
        measures. The issue with preventive technologies is that it has to deal
        with traffic that is bad (say) 80 percent of the time but good 20
        percent of the time. Most organizations will not risk blocking 20
        percent of legitimate traffic in order to block the bad traffic. We
        allow preventive technologies to allow such traffic in and then use
        detective technologies to make a decision on what to do with what comes
        in. Integrated defense-in-depth: it is not a good idea to have one???s
        security concentrated in one area. Security should be integrated with
        all of the system???s components.
    </em>
</p>
<p>
    Risks, can be expressed by this simple formula:
    <strong><mark>
        Risk (due to a threat) = Threat x Vulnerability (to that threat)
    </strong></mark>
    ... If you have a very high threat, but a very low vulnerability to that
    threat, your resulting risk will be only moderate. If you have a high
    vulnerability to a threat, but the threat itself is minor, once again you
    have only a moderate risk factor. If, however, you have a high level of
    threat potential and your vulnerability to that threat is very high, you
    have a very high risk factor.
</p>
<p>
    <em>
        Everything we do in security should revolve around risk. Security deals
        with the probability of loss. Before spending a dollar on security, an
        organization should evaluate the risks, the priority of such risks, and
        the cost-effectiveness of solutions. You must know what the offense is
        capable of and what the defense is and what your own weaknesses are. If
        you don???t know both, you will lose. This is what the risk formula is:
        threats are what the offense is capable of, and vulnerabilities are
        your defensive weaknesses.
    </em>
</p>
<p>
    <em>
        When doing security offense must drive the defense. We should care
        about fixing only those vulnerabilities that pose a real threat that
        can cause harm. We focus on the threats that have the highest
        likelihood and the vulnerabilities that have the greatest impact.
    </em>
</p>
<p>
    We must understand that it is impossible to completely eliminate all risk.
    Therefore, the job of the security professional is to constantly track,
    manage and mitigate risk to an organizations critical assets. Security is
    all about understanding and controlling risk to your critical assets. More
    specifically we are trying to minimize the risk and protect the
    confidentiality, integrity and availability of our critical systems. When
    first exploring any new business application or system, it is a good habit
    to begin by thinking about confidentiality, integrity, and availability-
    and countermeasures for protecting these, or the lack thereof. Attacks may
    come against any or all of these.
</p>
<p>
    While all three areas of CIA are important to an organization, there is
    always one area that is more critical than the others. Different
organizations will have different priorities in the CIA triad.    <strong><mark>Confidentiality</strong></mark> is usually very important to
    health-care-oriented organizations; <strong><mark>integrity</strong></mark> is important
    to financial institutions; <strong><mark>availability</strong></mark> is critical to
    companies that generate revenue online. Understanding what the priorities
    are for your organization is a tremendous help in prioritizing security
    plans for your organization, from design to incident response.
</p>
<p>
    <em>
        The risks we are concerned with are the disclosure of critical
        information, the alteration of intellectual property, and the
        destruction or denial of access to key information. Security is
        concerned with both external and internal threats. Why break through a
        firewall, an intrusion prevention system, and a strong and robust
        infrastructure when you can get someone on the inside hand you the
        data? External threats constitute between 40 and 60 percent of threats,
        and yet many organization???s security budget is on focused 80% on
        external threats. According to some estimates more than half of insider
        threats are due to ???errors and omissions??? or unintentional but careless
        acts. We should be proactive and seek to reduce the opportunity for
        mischief.
    </em>
</p>
<p>
    We use <strong><mark>threat models</strong></mark> to describe a given threat and the
harm it could do if the system has a vulnerability.    <strong><mark>Threats</strong></mark>, in an information security sense, are any
    activities that represent possible danger to your information or operation.
    Danger can be thought of as anything that would negatively affect the
    confidentiality, integrity, or availability of your systems or services.
    Thus, if risk is the potential for loss or harm, threats can be thought of
    as the agents of risk.
</p>
<p>
    There are too many variables to ever protect against all the possible
    threats to your information. To do so would cost too much money and take
    too much time and effort. So, you will need to pick and choose against what
    threats you will protect your systems. Security is as much risk management
    as anything. You will start by identifying those threats that are most
    likely to occur or most worrisome to your organization.
</p>
<p>
    ln security terms, a <strong><mark>vulnerability</strong></mark> is a weakness in your
    systems or processes that could be exploited by a threat. However, simply
    having a vulnerability by itself is not necessarily a bad thing. It is only
    when the vulnerability is coupled with a threat that the danger starts to
    set in.
</p>
<p>
    Vulnerabilities are the gateways by which threats are manifested. Without
    vulnerabilities, threats do not pose a risk to the organization. Of course,
    vulnerabilities do not have to exist solely in software flaws.
    Vulnerabilities can be incorrect configurations, poor physical security,
    poor hiring practices, etc. When we couple vulnerabilities with threats, we
    introduce risks to an organization. A zero day (0 day) attack is an exploit
    that is not publicly available and the vendor is usually not aware of the
    flaw. As you can imagine, these are the most dangerous.
</p>
<p>
    Vulnerabiliti</h3>ive <strong><mark>vulnerability assessment</strong></mark> can we accurately
    calculate our overall risk. Vulnerabilities can be reduced or even
    prevented, provided, of course, that you know about them. The problem is
    that many vulnerabilities lay hidden, undiscovered until somebody finds out
    about them. Unfortunately, the somebody is usually an attacker.
</p>
<p>
    There are four basic approaches to defense-in-depth:
</p>
<p>
    <strong><mark>Uniform protection</strong></mark>
    treats all systems as equally important. No special consideration, or
    protection, is given to the critical intellectual property of an
    organization. As a result, this approach can be more vulnerable to
    malicious insiders, because the systems are not separated or categorized
    within the network. Of all the approaches to defense-in-depth, this one can
    be the weakest, unless you have a good uniform protection design. This is
    also by far the most common approach and usually the starting point for
    most organizations.
</p>
<p>
    In <strong><mark>protected enclaves</strong></mark> work groups that require additional
    protection are segmented from the rest of the internal organization. Access
    to critical segments is highly restricted. Protected enclaves involve
    segmenting your network. This can be done by implementing many VPNs across
    a single network, VLAN segmentation of switches, or firewalls to separate
    out the network. This is a very simple yet effective technique. Reducing
    the exposure or visibility of a system can greatly reduce the impact
    malicious code can have.
</p>
<p>
    In <strong><mark>information-centric</strong></mark> defense successive layers of
    protection are built around the information you want to protect. In order
    to successfully get your information, an attacker would have to penetrate
    through your network, your host, your application, and finally your
    information protection layers. Information centric defense starts with an
    awareness of the value of information within an organization. Identify the
    most valuable information and implement controls to prevent non-authorized
    employees from accessing it. <strong><mark>Vector-oriented</strong></mark>
    defense-in-depth involves identifying various vectors by which threats can
    become manifested and providing security mechanisms to shut down the vector
    - for example, disabling USB thumb drives and floppy drives. ln an ideal
    case you would like to remove the vulnerability so the attack has no chance
    of success.
</p>
<h3>
    Lecture 2: Access Control
</h3>
<p>
    <strong><mark>Access control</strong></mark>
    ensures that resources are only granted to those users who are entitled to
    them. The reality is that no organization has sufficient resources to
    protect all information with the rigor that the most sensitive information
    requires. Consequently, organizations often classify their data into
    differing levels so that appropriate protections can be applied based on
    the sensitivity of the information and on the potential impact of loss.
    Generally, the best strategy for classifying data is to use a few clearly
    delineated categories and train your personnel in distinctive category use.
    You only need a different category when you have a significant quantity of
    information that requires significantly different protection.
</p>
<p>
    <em>
        Data classification is a prerequisite for doing access control. Things
        to consider when doing data classification: (i) don???t start by
        unclassifying all data and then classifying data piecemeal. All data
        should be classified by default. Data can then be unclassified on an
        as-needed basis. This approach is better in preventing the leakage of
        unclassified data. (ii) break your data classification into two
        parts--existing data and new data???to make the process manageable. (iii)
        don???t create too many classification levels. Unnecessary complexity
        weakens security.
    </em>
</p>
<p align="left">
    <em> </em>
</p>
<p>
    Who has the authority to classify data and to change data classifications
in your organization? Setting the appropriate    <strong><mark>classification level</strong></mark> for data is ultimately the
    responsibility of senior management. The IT security professional can
    assist management in making these decisions by using risk assessment
    techniques to quantify the value of the data and the impact of threats to
    the confidentiality, integrity, and availability of the data.
</p>
<p>
    In order to protect critical assets, you have to be able to identify,
    verify, approve, and track who has access to given piece of intellectual
    property (IP). <strong><mark>Identification</strong></mark> is the process of claiming
    to be a certain person. The problem is anyone could claim they are a given
    entity, so how do you know that they are who they say they are. This is
    accomplished through authentication. <strong><mark>Authentication</strong></mark> is
    proving that you are who you say you are and is done in one of four ways:
</p>
<p>
    <strong><mark>Something you know</strong></mark>
    - by remembering a piece of information and presenting it, you can prove
    that you are who you say you are. <strong><mark>Something you have</strong></mark>- by
possessing something you can prove that you are a given entity.    <strong><mark>Something you are</strong></mark> - an alternative way to authenticate is
    by presenting a unique attribute tied to your physical make-up. This is
    often called biometrics. <strong><mark>Someplace you are</strong></mark> - GPS or global
    positioning systems can also be used to authenticate that you are in a
    given geographic area.
</p>
<p>
    Once you have been properly authenticated, you then have to determine what
you are allowed or authorized to do on the system.    <strong><mark>Authorization</strong></mark> should be based on a principle of least
    privilege, where an entity is only given the minimal access they need to do
    their job. Once access is granted using the principle of least privilege,
    you want to make sure individuals are held accountable for their actions
    and you can trace back what occurred on a system through detailed auditing;
    this process is called <strong><mark>accountability</strong></mark>.
</p>
<p>
    Access Control Principles:
</p>
<p>
    <strong><mark>Least Privilege</strong></mark>
    : Give someone the <em>least</em> amount of access they need to do their
    job
</p>
<p>
    <strong><mark>Need to Know</strong></mark>
    : Give user access only <em>when</em> they need it
</p>
<p>
    <strong><mark>Separation of Duties</strong></mark>
    : Break critical tasks across multiple people to limit your points of
    exposure 
	<P>
	<strong><mark>Rotation of Duties</strong></mark>: Change jobs on a regular
    basis to prevent anyone from colluding
</p>
<p>
    In assigning access, you should give someone the least amount of access
    they need to do their job. However, this access should not be given all of
    the time; the access should only be granted when it is needed to perform a
    job function. What happens in the case where the minimal access granted is
    still too great a risk and cannot be taken? In those cases, separation of
    duties needs to be implemented, where a given task is split between two
    individuals so no single individual by themselves can make a decision. The
    more people work together, the more the power of separation of duties
    erodes away, because people build trust. To minimize the chance of this
    occurring, rotation of duties needs to be performed. This is where people
    are rotated out of certain jobs at set intervals so the chance of two
    people colluding is minimized.
</p>
<p>
    Access Control Techniques:<strong><mark> </strong></mark>
</p>
<p align="left">
    <strong><mark>Discretionary Access Control (DAC)</strong></mark>
    consists of something the user can manage, such as a username or password.
    For example, a user might choose to give a document password to someone
    without notifying the administrator. Windows peer-to-peer networks or
    standard Linux file permissions are good examples of DAC.
</p>
<p>
    <strong><mark>Mandatory Access Control (MAC)</strong></mark>
    requires matching classification and clearance. Controls are set by the
    system and cannot be overwritten by the administrator. MAC requires a lot
    of work to maintain because all data has a classification and all users
    have a clearance. Users must have the appropriate clearance to access data
    classified a certain way. Users cannot give their clearance to another
    person.
</p>
<p>
    <strong><mark>Role-Based Access Control (RBAC)</strong></mark>
    assigns users to roles or groups based on their organizational functions.
    Groups are assigned authorization to perform functions on certain data.
</p>
<p align="left">
    <strong><mark>Ruleset-Based Access Control (RSBAC)</strong></mark>
    targets actions based on rules for subjects (entities) operating on objects
    (data or other resources). RSBAC is implemented in a variety of software
    programs and operating systems (including Linux).
</p>
<p>
    <strong><mark>List-Based Access Control</strong></mark>
    associates a list of users and their privileges with each object. Each
    object has a default set of privileges that applies to unlisted users.
</p>
<p>
    <strong><mark>Token-Based Access Control</strong></mark>
    associates a list of objects and their privileges (called capabilities)
    with each user, the opposite of list-based access control.
</p>
<p>
    <em>
        Discretionary Access Control works in dedicated systems where all the
        data and users are at the same sensitivity level. DAC doesn???t work with
        multi-level secure systems, which require Mandatory Access Control,
        which limits access to users based on their clearance level. The two
        main ways of assigning access are based on groups or rules. Firewalls
        typically use rules for access control. One problem with group-based
        access is that users can be members of more than one group, which
        elevates a user???s privileges more than the minimum required for them to
        do their job. An alternative is to use role-based access control, which
        limits users to being a member of only one role at a time.
    </em>
</p>
<p align="left">
    User accounts, data, and their relationships must be actively maintained,
    perhaps by an entire team of employees. This process, called access
    management, consists of four tasks: account administration, maintenance,
    monitoring, and revocation.
</p>
<p>
    <strong><mark>Account administration</strong></mark>
    is a set of best management practices. The administrator verifies the
    individual before providing access - this is the most important step in the
    process. <strong><mark>Maintenance</strong></mark> is the process of reviewing account
    data and spot-checking for inconsistencies or errors. Periodically, account
    management staff should review and update lists of users and
    authorizations. For accountability, authentications and authorizations
    should be <strong><mark>monitored</strong></mark>. System administrators should log both
    successful and failed attempts to logon to the system. Logging of the use
    of systems resources (files, programs, printers, etc.) should be enabled
    based on Risk Assessment of the value of those resources. Almost as
    important as account administration is <strong><mark>revocation</strong></mark>. Account
    management staff and system administrators should promptly revoke
    privileges when they are no longer needed, especially for users who have
    been fired.
</p>
<h3>
    Lecture 3: Incident Response
</h3>
<p>
    A sad fact to consider is that a plethora of companies worry about their
    network or computer systems getting compromised, but very few have spent
    time preparing for that eventuality. Understanding the basis of incident
    handling procedures is paramount to the success of maintaining a healthy
    security posture over time.
</p>
<p>
    <strong><mark>Incident handling</strong></mark>
    is the action or plan for dealing with intrusions, cyber-theft, denial of
    service attacks, malicious code, and other events. The scope of incident
    handling goes well beyond dealing with just intrusions; it covers the gamut
    from insider crime to anything that causes a loss of availability, whether
    intentional or unintentional.
</p>
<p>
    One of the best ways to act on an incident and minimize your chance of
    making a mistake is by having proper procedures that are well documented in
    place. Being able to rely on solid documentation on what to do when an
    incident occurs will help in minimizing the chance that a crucial step in
    the process will be overlooked or forgotten.
</p>
<p>
    For the purposes of incident handling, the term <strong><mark>incident</strong></mark>
    refers to harm or the significant threat of harm. Because we are dealing
    specifically with harm or the potential for harm, our task is to limit the
    damage. In the process, we need to ensure that we choose courses of action
    that do not cause further harm. The term <strong><mark>damage</strong></mark> means
    "impairment to the integrity or availability of data, a program, a system
    or information."
</p>
<p>
    The key point to keep in mind when defining an incident versus an event is
    that all incidents are composed of a series of events, but not all events
    are considered incidents. For example, an unauthorized logon is considered
    an incident while an authorized logon is not, yet both are network events.
</p>
<p>
    A good way to get an overview of the incident handling process is to
    compare it to giving first aid. In both cases, time is not your friend. You
    are under immense pressure, and mistakes can be costly. We strongly
    recommend that you use pre-established procedures that specify how to act
    during common attack situations.
</p>
<p>
    As part of the incident handling process, pre-designed forms should be used
    to aid in recording events. These forms provide a convenient way to
    document each step of the handling process and to ensure that crucial
    information such as dates, events, people involved and systems affected is
    not missed or overlooked.
</p>
<p>
    <em>
        The longer it takes you to respond the greater the potential for
        damage. At the same time mistakes are very costly. It is better to go
        slow and do it right than to go fast and cause more damage. Ambulance
        drivers don???t drive full speed when crossing red lights.
    </em>
</p>
<p>
    The six steps listed here can help serve as a roadmap or a compass to
    develop a phased approach to incident handling. Keep in mind that in order
    for this process to be successful, each step must be followed. The six
    steps are: 1. Preparation 2. Identification 3. Containment 4. Eradication
    5. Recovery 6. Lessons Learned
</p>
<p>
    The <strong><mark>preparation</strong></mark> step is the first and most critical step
    of the incident handling process. The tasks associated to this step must be
    performed in advance, before the incident has occurred. Another important
    item to consider is whether to contain the incident and move into cleanup
    phases or to observe the attack in an attempt to gather more evidence.
    Because of the sensitive nature of incident handling, any decisions made
    could greatly affect your career down the road if you did not get approval
    or reach consensus with management. The last thing you or your company
    wants is for senior management to question or doubt the decisions that were
    made during an incident. Reaction time to an incident is absolutely
    critical. Every effort should be made to find members of the incident
    handling team who will be able to respond on short notice.
</p>
<p>
    When it comes to <strong><mark>identifying</strong></mark> an incident, members of the
    team should stay with their realm of expertise. You would not want a
    Windows expert digging around a Unix system, and vice versa. Being able to
    correctly identify an incident could be the difference between cleaning up
    the problem in a few minutes and causing your organization's network to be
    down for several hours or even days. Obviously, any system outage could
    potentially cost your company a lot of money, so it is important to be able
    to identify an incident correctly the first time and respond accordingly.
</p>
<p>
    <em>
        Anything that interrupts or threatens to interrupt normal operations is
        an incident. Incidents can be either intentional or unintentional.
        There are different categories of incidents. Some incidents will only
        require logging, while others will require the efforts of the entire
        incident response team. Comprehensive logging of all events is a great
        aid in incident response. You can always get rid of logs you don???t
        need, but you can???t get logs you don???t have. Effective incident
        handling is not an intuitive skill. It requires preparedness as well as
        the right personality traits (team player, cool under pressure).
    </em>
</p>
<p align="left">
    <em> </em>
</p>
<p>
    After you determine that the event is actually an incident, the handler may
    decide to take the steps needed to build a criminal or civil case. In this
    situation, witnesses should be identified, and a written statement of what
    they heard or saw should be taken immediately while the information is
    still fresh in their minds.
</p>
<p>
    The primary responsibility of the incident handler is to make things better
while adhering to the basic principles of liability and negligence.    <strong><mark>Negligence</strong></mark> for failure to meet a certain standard of care
    is generally determined by a court of law. Specifically, negligence is
    defined as, "the failure to exercise the degree of care expected of a
    person of ordinary prudence in like circumstances in protecting others from
    a foreseeable risk of harm in a particular situation."
</p>
<p>
    In <strong><mark>containing</strong></mark> an incident, you must first secure the area.
    In doing so a forensically sound backup should be made of all infected
    systems. At some point in the containment process, a decision needs to be
    made of whether the systems should be pulled off the network or if the
    entire network should be disconnected from the internet. Also, passwords
    should be changed as soon as possible to make sure a compromised account
    couldn't be used for reentry into the system by a remote attacker.
</p>
<p>
    <strong><mark>Eradication</strong></mark>
    : before the system goes back online, an incident handler must make sure
    that she fixes the problem or the vulnerability that the attacker used to
    compromise the system. At first glance, the tendency may be to wipe out the
    entire operating system and rebuild it from scratch. Although this is
    certainly an effective way to remove any malevolent code, the opportunity
    for re-infection via the same channel still exists. It is not enough to
    simply recover the system and put it back online: The underlying security
    mechanisms of the affected systems must be altered, fixed, or upgraded to
    accommodate any new vulnerabilities. After the system is recovered, it is a
    good idea to run a vulnerability scanner against the affected system to see
    if the problem is, indeed, fixed and that no new holes were opened up in
    the process.
</p>
<p>
    The key point to consider in the <strong><mark>recovery</strong></mark> phase is to
    ensure you are not restoring vulnerable code that has already proven itself
    to be exploitable by any number of attack methods. For example, if you
    restore a system from tape backup, then you could be restoring a previous
    state that contained the vulnerability exploited by the attacker.
    Vulnerable code, in this context, refers to operating system software that
    hasn't been patched to the latest levels, source code and/or application
    software being used on the affected system. Although there is no easy
    solution, using a file integrity tool such as Tripwire might help in
    restoring the system to a known good state. Anything that breaks after the
    recovery is likely to be blamed on the incident handler, so every effort
    should be made to ensure the system is working as normal before turning it
    over to the system administrator.
</p>
<p>
    <strong><mark>Lessons learned</strong></mark>
    : after the system has been restored and is back in operation, a report
    outlining the entire process should be drafted by the primary incident
    handler. It is very important to summarize the incident, identifying the
    most relevant conclusions obtained to aid in avoiding similar incidents in
    the future. The report should contain areas for improvement, both in the
    security infrastructure and in the incident-handling process itself.
</p>
<h3>
    Lecture 4: Information Warfare
</h3>
<p>
    One of the things that makes information warfare so difficult is the high
number of unknowns. One of the key tenets of cyber security is    <strong><mark>know thy system</strong></mark>. If you do not know what the threats
    and/or vulnerabilities are, it is hard to calculate the risk.
</p>
<p>
    Three basic tools of <strong><mark>information warfare</strong></mark> are perception
    management, malicious code, and predictable response. They can be used
    separately or together. Two of the three, perception management and
    predictable response, are core techniques of business competition. In
    information warfare, the focus shifts to technological implementations of
    these techniques.
</p>
<p>
    The focus for information warfare over the past decade seems to be, at its
    heart, economic. There really isn't such a thing as a neutral country when
    it comes to cyberwar. Information warfare operations are as likely to
    travel through neutral countries as any others before reaching the
    belligerent target. <strong><mark>User awareness training</strong></mark> can help with
    both perception management and predictable response. Standard
    defense-in-depth approaches can reduce the attack surface for malicious
    code.
</p>
<p>
    <em>
        The most important concept to internalize as either the attacker or
        defender is asymmetry: information warfare is not a zero-sum game.
        Asymmetric warfare is war without rules. In asymmetric warfare a fairly
        small input can have a very large effect. Offense is dominant because
        it doesn???t play by the rules. In a fair fight defense would have the
        upper hand.
    </em>
</p>
<p>
    Hackers are the most visible offensive players in terms of the
    consciousness of the public and press. However, an ICSA yearly report
    claimed that <strong><mark>insider attacks</strong></mark> account for 90% of the
    financial damage that occurs. The important thing to consider is that a
    remarkable number of organizations do not realize they are being used or
    stolen from. Whether hackers or insider fraud, the criminal world is fully
    engaged in the internet and in information operations. Whatever crime your
    organization is or is not experiencing, you can be certain that due to the
    intense competition from globalization it is experiencing competitive
    intelligence gathering.
</p>
<p>
    On the defensive side the challenge is to protect the value of our
    information and hopefully reduce the value of the offense's assets. The
    most common approach to defense is to establish effective perimeters and
    seals to maintain and to be able to validate integrity.
</p>
<p>
    Defense-in-depth is one of our most important tools as a defender. If we
    can learn to <strong><mark>think like the attackers</strong></mark>, to see through
    their eyes even just a bit, we can be alert to the opportunities to attack
    us asymmetrically and attempt to place defenses to prevent those. Sometimes
    we may be able to use tools like honeypots to understand their attacks and
    motives, and we may be able, on occasion, to release some incorrect
    information and cause the attackers to make a predictable response.
</p>
<p>
    The aggressor's goal is to achieve the greatest impact from the least
    investment possible (<strong><mark>asymmetrical result</strong></mark>). Fortunately for
    them, the ongoing expansion of network perimeters and increasing system
    complexity aids greatly in the impact available from a relatively minor
    investment. The defender's goal is to increase the required investment to a
    level where the target is no longer attractive. Although achieving a true
    zero-sum result is unreasonable to expect, there are tools and techniques
    that can be used to begin approaching balance. Your task is to understand
    and use these tools to your best ability.
</p>
<h3>
    Lecture 5: Defense Strategies
</h3>
<p>
    <em>
        The best way to secure your system is to fix the problem, not the
        symptom. If we were injured, we wouldn???t take pain-killers to continue
        exercising. This will only end up making the problem worse. In almost
        every case when somebody gets attacked, it is from multiple vectors.
        Many attacks involve at least 5 vulnerabilities. In many cases fixing
        just one vulnerability could have prevented the attack from succeeding.
        Your focus should not be to uncover every single vulnerability in the
        system, but on those that have the biggest impact and likelihood of
        causing damage.
    </em>
	<P>
    Not only is <strong><mark>prevention</strong></mark> usually the most cost effective way
    to deploy security resources, but it is probably also the most obvious.
    Sometimes it is too obvious. Organizations that rely solely on prevention
    often get taken for a bad ride when an attack eventually manages to get
    through all their preventative measures. At a minimum, you should have
    well-defined incident response procedures in place to help you figure out
    what to do when your defenses are finally breached. And they will be
    breached eventually; it is just a question of when and to what extent.
</p>
<p>
    Timely <strong><mark>patching</strong></mark> can often prevent the majority of attack
    vectors from being successfully executed. Patches are often available
    before or very soon after exploits are announced. In modem-day information
    security, patching of systems and applications is often considered to be
    one of the most important tasks for system administrators and security
    professionals alike.
</p>
<p>
    You should disable <strong><mark>non-critical services</strong></mark>???that is, services
    that are not essential to the system's function. Many operating systems
    come with unnecessary services installed and enabled out of the box, which
    can place a system at immediate risk once connected to a network. By
    carefully selecting options during installation and routinely auditing
    systems for unnecessary services or applications, you can significantly
    reduce the risk of a threat exploiting a vulnerability. If you narrow down
    to a select few the range of services you offer, you can concentrate on
    configuring those services in as secure a manner as possible, while
    simultaneously denying an attacker any possibility of using poorly managed
    secondary services against you.
</p>
<h3>
    Lecture 6: Firewalls
</h3>
<p>
    Probably the first thing any security analyst does when he designs a
    network these days is to plan for a <strong><mark>firewall</strong></mark>. It is almost
    impossible to have any kind of good internal security control without first
    establishing a secure network perimeter. In fact, the principle of
    security-in-depth practically demands that you be able to control the
    traffic entering and leaving your network.
</p>
<p>
    A firewall is a means to control what is allowed across some point in a
    network as a <strong><mark>mechanism to enforce policy</strong></mark>. Firewalls are
    utilized at a variety of network locations, of which two are: Between the
    public internet and an organization's private internal network. Between a
    PC's network interface card (NIC) and the rest of the PC. Firewalls may be
    implemented as: Dedicated network appliances (there seems to be a distinct
    trend toward appliances). Hardware or software inserted into a network
    device such as a router (that is primarily performing other duties).
    Software running on a general purpose computer.
</p>
<p>
    <em>
        All connections should go through a firewall. An incorrectly configured
        firewall is almost useless. The firewall ruleset should not be too
        long. The longer it is the harder it is to understand and maintain. The
        first thing you should do when assessing a firewall is to check the
        number of dropped packets. This is the most direct way of knowing
        whether the firewall is working as intended.
    </em>
</p>
<p>
    <strong><mark>Firewalls advantages</strong></mark>
    : They reduce risks by protecting systems from incoming and outgoing
    attempts to exploit vulnerabilities. Increase privacy by making it harder
    to gather intelligence about a site. Filter communications based upon
    content, such as offensive or malicious content coming in or proprietary
    content flowing out of an organization. Encrypt communications for
    confidentiality. Provide records concerning both successful and blocked
    network traffic, which may be critical for incident handling and forensics.
    Serve as a "noise filter" and conserve bandwidth.
</p>
<p>
    <strong><mark>Firewalls shortcomings</strong></mark>
    : Attacks at the application layer may sneak through. Dial-up, VPN,
    extranet connections may bypass firewalls. Organizations may let down their
    guard in other security areas (passwords, patches, encryption). Management
    sees firewall as a silver bullet. With the value that firewalls offer, it
    can be tempting to think that they are cure-ails. They are not. Firewalls
    are not bulletproof. They do not stop all attacks. ln fact, they can be
    attacked themselves.
</p>
<p>
Firewalls are designed with something called a    <strong><mark>default rule</strong></mark>: If a packet doesn't match another rule, the
    default rule drops the packet. This is known as deny all except that which
    is explicitly allowed. Firewall administrators who override this rule
    create an allow all except that which is explicitly denied policy. Default
    deny is more restrictive. Default allow is more permissive. The "default
    deny" stance helps protect against previously unknown attacks and
    vulnerabilities.
</p>
<p>
    Among firewalls, <strong><mark>proxy firewalls</strong></mark> generally are the slowest
    in performance and the most inconvenient to manage; however, proxy
    firewalls usually provide the best security. Proxy firewalls essentially
    tear down each packet layerby-layer on one interface and build it back up
    on the opposite interface. From the perspective of the source, the traffic
    flows to the destination. But the traffic actually is delivered to a
    virtual destination just inside the proxy firewall, on the input side,
    where it is disassembled and examined.
</p>
<h3>
    Lecture 7: Intrusion Detection
</h3>
<p>
    An <strong><mark>Intrusion Detection System</strong></mark> (IDS) will monitor activity
    that is known or suspected to be malicious in its intent, raising alerts to
    a human to be analyzed. The person who is responsible for responding to the
    alerts (incident handler) uses the information generated by the IDS to try
    to identify the intent of the suspicious activity, and takes some action
    based upon the analysis. IDSs should be used in conjunction with firewalls,
    anti-virus software, vulnerability assessment and management and patch
    management tools to support a defense-in-depth posture.
</p>
<p>
    <strong><mark>Host-based intrusion detection systems</strong></mark>
    (HIDSs) usually consist of software that resides on a host machine and
    monitors the traffic in and out, as well as the integrity of the host's
    files. HIDS can be trained to record a system's initial baseline of users,
    running applications and services, and particular files to monitor, and it
    can then alert an administrator when any one of these elements changes
    unexpectedly.
</p>
<p>
    A common mistake in the deployment of IDS technology is to spend capital
money on the acquisition and deployment of tools without a    <strong><mark>maintenance and utilization plan</strong></mark>. The costs of maintaining
    and using the IDS far outweigh the costs of acquiring the tools. Further,
    it takes a well-trained analyst to be able to understand and correctly
    interpret the alerts generated by an IDS, which adds to the total cost of
    ownership for the organization.
</p>
<p>
    When an IDS sees activity, any kind of activity, they must identify and
    classify the activity. This classification typically falls into two groups-
    positive for an <strong><mark>event of interest</strong></mark> (EOl), or negative for
    an EOI. An event of interest can be anything the analyst wants to identify
    with the IDS, including specific hacker tools, particular content or
    keywords in e-mail or instant messages or even a specific filename being
    transferred between hosts.
</p>
<p>
    The analyst will inevitably have to work with four different
    classifications of events:
</p>
<p>
    <strong><mark>True Positive</strong></mark>
    - ln these cases, the IDS worked as intended, and correctly flagged the
    activity as anomalous behavior that might be malicious. True positives
    generate alerts for the analyst to process.
</p>
<p>
    <strong><mark>False Positive</strong></mark>
    - A false positive case is where the IDS generates an alert flagging
    hostile activity which was benign. False positives generate alerts for the
    analyst to process, who then must decide how to handle the incident.
</p>
<p>
    <strong><mark>True Negative</strong></mark>
    - A true negative event is what we want the IDS to see, the cases where
    data does not indicate any malicious activity, and the data is correct. ln
    the case of a true negative, the IDS does not generate an alert for the
    analyst.
</p>
<p>
    <strong><mark>False Negative</strong></mark>
    - A false negative event is when the IDS identifies data as benign, when in
    fact it is malicious. A false negative does not generate an alert for the
    analyst.
</p>
<p>
    A false negative is the worst-case scenario, since it does not provide any
    information to the analyst about attacks against systems. A smart attacker
    may employ <strong><mark>IDS evasion techniques</strong></mark> designed specifically to
    generate false negative events on the system to avoid detection.
</p>
<p>
    A <strong><mark>Network Intrusion Detection System</strong></mark> (NIDS) is deployed as
    a passive sensor at network aggregation points where it collects packets
    for analysis. Each packet that is collected is processed to identify events
    of interest, and reported to the analyst. A NIDS device can be a server or
    an appliance with a hardened operating system that makes it resistant to
    attack. Being in a position to monitor all the traffic on the network makes
    the NIDS a valuable target for an attacker looking to capture information
    on the network. NIDS devices use a few different methods to identify events
    of interest on the network, including signature analysis, anomaly analysis
    and application or protocol analysis.
</p>
<p>
    <strong><mark>Signature analysis</strong></mark>
    is the most common method of identifying events of interest on the network.
    In its simplest form, a unique characteristic is identified for a
    particular EOI, and a signature is created to identify that characteristic,
    raising an alert from the IDS.
</p>
<p>
    <strong><mark>Anomaly analysis</strong></mark>
    is based on events for specific protocols and applications that are outside
    the typical operating conditions. The IDS can leverage data from these
    unusual events to generate events to be analyzed by the intrusion analyst.
</p>
<p>
    <strong><mark>Protocol analysis</strong></mark>
    works by carefully examining the entirety of protocols and how they
    operate. Based on the implementation and specifications for protocols, the
    IDS develops the logic to understand how the protocol operates in its
    input, processing and output phases. Any use of the protocol that does not
    function within the definition of how the IDS understands the protocol is
    identified as anomalous activity which generates an alert.
</p>
<p>
    With <strong><mark>shallow packet inspection</strong></mark>, the IDS processes only a
    portion of the packet for analysis. This method of analysis extracts and
    evaluates the contents of a limited number of fields within the packet at
    predictable offset locations. The advantage of this method of analysis is
    that it is very fast, it can be performed at near wire-speed with optimized
    hardware.
</p>
<p>
    <strong><mark>Deep packet inspection</strong></mark>
    performs a full analysis of the packet, including the evaluation of
    fixed-length and variablelength fields. Deep packet inspection is
    traditionally deployed at an application level firewall gateway, where the
    gateway has a complete understanding of the protocol and has the logic to
    follow the fields inside the packet. This method of packet inspection is
    much more difficult than shallow packet inspection, and much slower. Modern
    IDS systems typically deploy a combination of shallow and deep packet
    inspection.
</p>
<p>
    The best way we've discussed to protect yourself against threat vectors is
    to regularly audit your perimeter security. This is a fancy way of saying
you need to hack your own systems. The cardinal rule of scanning or    <strong><mark>vulnerability assessment</strong></mark> is to be certain to only scan
    systems that you own or are authorized to scan. Otherwise, you will
    probably be setting off someone else's intrusion detection systems, which
    could get you in trouble.
</p>
<p>
    You should also be sure to give people plenty of warning before starting
    your scan. Things can go very wrong when you are scanning. Scans often
    crash systems, and people will be a lot more forgiving if you warn them
    ahead of time and make sure it is easy for them to find you.
</p>
<p>
    <strong><mark>Penetration testing</strong></mark>
    is used to test the security of a network or security itself. The testing
    can take many forms: the perimeter security of any building, server, or
    network must be tested regularly, lest attackers do it for you. A
    penetration test sometimes is completed at the conclusion of a
    vulnerability scan and is used to determine the validity of any identified
    vulnerabilities. By actually attempting to exploit vulnerabilities found in
    the scan, a penetration test helps to eliminate false positives.
</p>
<p>
    A <strong><mark>honeypot</strong></mark> is an information system resource that has no
    legitimate purpose or reason for someone to connect to it. It serves two
    main purposes: (i) to draw in attackers to understand how they break into a
    system. (ii) to better determine what is attack traffic so defense measures
    can be improved. A honeypot is an advanced technique that is usually
    deployed after other security measures have been implemented.
</p>
<p>
    Organizations that deploy honeypots have to be careful that the honeypots
    do not increase their liabilities and/or decrease security. The main
    concern is enticement. lf you encourage an attacker to break into a site,
your organization is liable if the attacker uses your site as a relay. A    <strong><mark>relay</strong></mark> occurs when an attacker breaks into a site and uses
    it as a launch platform to compromise other systems. If an attacker can
    find a foothold behind your firewall, it is easier for him to compromise
    other systems. For this reason, deploying weak honeypots on a DMZ is not
    recommended.
</p>
<p>
    <strong><mark>Advantages of honeypots</strong></mark>
    : they provide insight into the tactics, motives, and tools of attackers.
    Reduces challenges of false positives, false negatives, and data collection
    by determining true attack traffic. Provides additional Defense-in-Depth
    for organizations.
</p>
<p>
    <strong><mark>Disadvantages of honeypots</strong></mark>
    : Improper deployment of honeypots can lead to increased risk of attack.
    Fingerprinted honeypots can be used against an organization. Honeypots only
    see traffic sent to it, and they do not help identify other compromised
    systems. They can be a resource burden (not set and forget). They are a
    legal
</p>
<p>
    liability.
</p>
<h3>
    Lecture 8: Intrusion Prevention
</h3>
<p align="left">
    <strong><mark>Intrusion prevention</strong></mark>
    technology will attempt to stop attacks before they are successful. How the
    IPS detects and stops the attack varies significantly between vendors,
    though each carries the same moniker of "intrusion prevention". An active
    IDS will stop an attack in progress, but a true IPS will stop an attack
    before it even starts. An IDS is deployed passively, while an IPS is
    traditionally deployed inline.
</p>
<p>
Intrusion prevention systems can be generally classified into two vectors -<strong><mark>network-based intrusion prevention</strong></mark> called NIPS, and    <strong><mark>host-based intrusion prevention</strong></mark> called HIPS. As their
    names indicate, NIPS products work at the network-level, analyzing traffic
    much like a NIDS. HIPS products are installed on individual hosts and stop
    attacks at the operating system or application level.
</p>
<p>
    Organizations using IPS systems are often able to extend the amount of time
    they have to deploy patches to resolve operating system and application
    flaws, potentially delaying the deployment of fixes until several patches
    have accumulated and a window for scheduled maintenance of equipment is
    available. Still, organizations should rely on defense-in-depth instead of
    just an intrusion prevention product to secure enterprise resources. IPS
systems are not a set-and-forget technology. They require significant    <strong><mark>maintenance and monitoring</strong></mark> to be effective defense tools.
    IPS is also not an inexpensive tool for enterprise-wide deployment.
</p>
<p>
HIPS software uses a technique called    <strong><mark>system call interception</strong></mark> (which is very similar to what
    anti-virus vendors have been doing for many years). The HIPS software
    inserts its own processes between applications accessing resources on the
    host and the actual OS resources. This way, the HIPS software has the
    ability to deny or permit those requests based on whether the request is
    identified as malicious or benign.
</p>
<p>
    <strong><mark>Advanced Application Shielding</strong></mark>
    is a HIPS feature that essentially locks an application into a sandbox
    where it is not permitted to communicate with other applications. Many
    exploits tend to rely on an operating systems' applications to launch
    attacks. If an application is locked down and prevented from communicating
    with other applications, you have essentially mitigated a big threat.
</p>
<p>
    Most organizations commonly implement NIPS technology at the perimeter in
    two or more areas. There are benefits to implementing IPS technology in
    different locations. The advantages of deploying an IPS system in front of
    the firewall is the overall protection it gives the firewall itself, as
    well as the DMZ systems. Denial of Service (DoS) attacks aimed at your
    firewall can be mitigated using this method as well. Although NIPS devices
    are gaining momentum they cannot detect malicious traffic that is
    encrypted.
</p>
    A false-positive in relationship to a NIPS device means that legitimate
    traffic is dropped, inflicting a denial-ofservice. Organizations can't
    afford false-positives with NIPS devices, so vendors make use of a
    combination of passive OS and vulnerability detection, network architecture
    identification, hierarchical rule classification and fewer rules than
    traditional NIDS devices. NIPS devices cannot have as extensive of a
    rule-base for identifying attacks on the network as an IDS. Where a NIDS
    can rely on an analyst to decide whether an alert is a true-positive or a
    false-positive, the NIPS device does not enjoy the same luxury.
</p>
<h3>
    Lecture 9: Attack Strategies
</h3>
<p>
    Although there are probably thousands of different exploits attackers can
    use against your systems, most can be classed into one or more categories,
    along with other similar exploits. A lot of research is being done to try
    to define a standard threat taxonomy, but so far none have been accepted
    widely.
</p>
<p>
    <em>
        The entry points for attacks have not changed in the last 15 years.
        Most attacks will use the path of least resistance. Therefore, the
        tried-and-true methods are still used today and are very effective.
    </em>
</p>
<p>
    In the classic sense of a planned attack, executed by a hacker with
malicious intent, a sequence of events typically takes place. First, in the    <strong><mark>reconnaissance</strong></mark> phase, the attacker gently probes the
    system(s) or network(s) to get a sense of what is out there. Next, after
    discovering potential targets, the attacker performs more thorough system
    scanning, if necessary, and the process of <strong><mark>enumeration</strong></mark>.
    With enumeration, the attacker attempts to gain some actual information
    about the network or system's users, specific system names, open shares,
    SNMP or LDAP directories, and so on. Finally, using any number of methods,
    the attacker actually attempts to <strong><mark>penetrate</strong></mark> the system or
    network and gain access and control of the resource in question.
</p>
<p>
    <strong><mark>Logic bombs</strong></mark>
    are small programs or sections of a program triggered by some event, such
    as a certain date or time, a certain percentage of disk space filled, the
    removal of a fi le, and so on. For example, a programmer could establish a
    logic bomb to delete critical sections of code if she is terminated from
    the company.
</p>
<p>
    <strong><mark>Trojan horses</strong></mark>
    (often just called Trojans) are often disguised as helpful or entertaining
    programs (such as operating system patches, Linux packages, or games). Once
    executed, however, Trojans perform actions the user did not intend, such as
    opening certain ports for later intruder access, replacing certain files
    with other malicious files, and so on.
</p>
<p>
    Trap doors, also referred to as <strong><mark>backdoors</strong></mark>, are bits of
    code embedded in programs by the programmer(s) to quickly gain access at a
    later time, often during the debugging phase. If an unscrupulous programmer
    purposely leaves this code in or simply forgets to remove it, a potential
    security hole is introduced. Trap doors can be almost impossible to
    reliably remove, and often reformatting of the system is the only sure way.
</p>
<p>
    <strong><mark>Denial of service (DoS) attacks</strong></mark>
    became quite popular in the early 2000' s, but they've probably been around
    almost as long as computers themselves. As the name implies, a DoS attack
    occurs when a user is deprived of the use of some data, computing resource,
    or service due to malicious actions on the part of an attacker.
</p>
<p>
    In a <strong><mark>Smurf DoS attack</strong></mark>, an attacker spoofs the victim's IP
    address and sends an ICMP ECHO request to the broadcast address of an
    arbitrary network. When every system on this network responds to the
    victim, a DoS occurs.
</p>
<p>
    In a <strong><mark>SYN flood attack</strong></mark> a spoofed IP address is used to send
    a SYN packet to the target. It then responds with a SYN/ACK that never
    receives the final ACK to complete the three-way handshake. This hanging
    connection occupies a portion of the target's pre-established buffer for
    TCP connections. By filling this buffer to capacity with fake SYN packets,
    an attacker can effectively prevent the target system from accepting
    legitimate requests.
</p>
<p>
    ln a <strong><mark>DDoS attack</strong></mark>, or a distributed denial of service, an
    attacker recruits zombie systems ahead of time to simultaneously release a
    flood of traffic at a specific target.
</p>
<p>
    There are many types of malicious data attacks, most of which rely on poor
    programming practices with careless error checking on input data. An
    attacker might put an alphabetic string where a numerical value is
    expected, bringing down a popular database application. Worse yet, he might
    insert Unix shell commands into input in such a way as to trick the
    back-end web application into executing them on the server.
</p>
<p>
    <strong><mark>Buffer overflow attack</strong></mark>
    : programs allocate a certain amount of buffer space (memory) to perform
    operations. In poorly coded applications, no boundary checks are present to
    ensure buffers are not 'overfilled'. The 'extra' code placed in the buffer
    can sometimes be used to execute system commands.
</p>
<p>
    <strong><mark>Brute force attack</strong></mark>
    : An attempt to gain access to a system by bombarding it with possible
    guesses until the correct one is found. Their goal is to guess a secret of
    some sort, like a password or an encryption key. The problem is that
    they're often nothing more than undirected searches that try every possible
    combination of inputs until they happen to get lucky. As you can probably
    imagine, this takes an extremely long time, making it probably the least
    efficient attack possible.
</p>
<p>
One especially troublesome form of alteration attack is the    <strong><mark>rootkit</strong></mark>. A rootkit is a cracker tool meant to be
    stealthily inserted into the local OS and subvert it so that it only does
    what the attacker wants it to do. This can be a devastatingly effective
    form of attack. Modern rootkits often subvert the kernel: process
    management, file access, security and memory management functions.
</p>
<p>
    There are so many <strong><mark>attack methods</strong></mark> that you really can't
    rely on just one or two preventive measures to protect yourself. You've got
    to follow the entire risk management cycle, from prevention, through
    detection, all the way to response, and back again to the beginning. You
    should use several distinct countermeasures and address each phase of the
    cycle somehow.
</p>
<p>
    People often are the weakest links in an organization's security. All the
    technology in the world cannot protect your network from a user who
willingly gives out her password or innocently installs malicious software.    <strong><mark>Social engineering</strong></mark> is the term used to describe an attempt
    to manipulate or trick a person into providing valuable information or
    access to that information.
</p>
<p>
    The best-known techniques of social engineering are urgency, impersonation,
    and third-person authorization. Exploiting human curiosity, gullibility, or
    greed, even automatically via the use of mass-mail worms, is pure social
    engineering at work. Phishing is a perfect example of how this can be used
    to cause harm. These examples show how human nature can make it easy for an
    attacker to walk right in to your network. Why hack through someone's
    security system when you can get a user to open the door for you?
</p>
<p>
    <strong><mark>Social engineering defense</strong></mark>
    : Develop appropriate security policies. Establish procedures for granting
    access and reporting violations. Educate users about vulnerabilities and
    how to report suspicious activity. Security policies should establish such
    things as the types of access allowed, the people authorized to grant such
    access, and the circumstances under which exceptions might be granted.
    Finally, educate your users about these types of threats. In most cases,
    users do not maliciously create security problems--they generally do so out
    of ignorance. If users are aware of the threats, they can properly guard
    against them.
</p>
<h3>
    Lecture 10: Risk Management
</h3>
<p>
    <strong><mark>Risk management</strong></mark>
    is much more than just determining the various risks you are exposed to. It
    is an exploration of the various approaches and techniques for managing
    these risks. Risk management's main focus is to reduce the risk until it is
    at an acceptable level. The actual acceptable level will vary from company
    to company. However, risk management means that we need to identify,
    control, and minimize the loss associated with each risk.
</p>
<p>
    As a general rule, before you can begin managing risks, you need to
    understand your business operations and the types of risks that they might
    be exposed to. Why is risk management so important to an organization? The
    fact is there are risks all around us. Some risks are not that damaging,
    although some can cause catastrophic results. The question is whether you
    know what those risks are. More importantly, what will you do if they
    become real?
</p>
<p>
    We structure our definitions and assumptions about risks around the
    concepts of the information security triad: confidentiality, integrity, and
    availability. We should keep these concepts in mind when performing risk
    assessments and subsequent risk management decisions. ln risk management,
    we are looking at ways to minimize the impact that could affect the
    confidentiality of our information, the integrity of our systems and data,
    and the availability of our infrastructure.
</p>
<p>
    The objective of risk management is to identify specific areas where
    safeguards (or countermeasures) are needed to prevent deliberate or
    inadvertent unauthorized disclosure or modification of information. The
    steps for an effective <strong><mark>risk management process</strong></mark> are:
</p>
<p>
    ??? Conduct a rapid assessment of risks so you know what your security policy
    needs to cover.
</p>
<p>
    ??? Fully analyze risks, or identify industry practice for due care; analyze
    vulnerabilities.
</p>
<p>
    ??? Set up a security infrastructure. Design controls; write standards for
    each technology.
</p>
<p>
    ??? Identify available resources, prioritize countermeasures, and implement
    priority countermeasures.
</p>
<p>
    ??? Conduct periodic reviews and possibly tests. Implement intrusion
    prevention and incident response.
</p>
<p>
    After your security policy is defined, the next step is to set up the
    security infrastructure. This could be a combination of administrative,
    technical, or physical security controls to address the risks identified.
    Administrative controls include policies, procedures and end-user security
    awareness training. Technical controls are technologybased solutions.
    Firewalls, intrusion prevention systems, anti-virus software protection,
    and the use of encryption are examples of technical controls.
</p>
<p>
    To decide between accepting, mitigating, or transferring the risk, we need
    to better understand the risk and how it affects us. When evaluating risk,
    it is helpful to ask yourself some key questions: 1. What could happen? 2.
    lf it happened, how bad could it be? 3. How often could it happen? 4. How
    reliable are the answers to the previous questions?
</p>
<p>
There are two risk assessment approaches: qualitative and quantitative. In    <strong><mark>quantitative risk assessment</strong></mark>, we try to assign an
    objective numeric value; typically, this value represents a monetary loss
    value. <strong><mark>Qualitative risk assessment</strong></mark>, on the other hand,
    deals with more intangible values, and focuses on variables and not just
    the monetary losses. Quantitative risk assessment is a far more valuable
    business tool, because it works on metrics- usually in dollars. And the
    bottom line cost in dollars is what management is looking for when trying
    to understand the implications of how a risk can affect the organization.
    ln qualitative risk assessment, the results are typically categorized as
    low, medium, or high-risk events.
</p>
<p>
    The process of determining what is at risk and what is the impact if the
    identified threats materialize is known as <strong><mark>risk analysis</strong></mark>.
    The purpose of risk analysis is to: Identify existing countermeasures,
    threats, and vulnerabilities. Support the expenditure of resources and to
    determine the most cost-effective safeguards to offset the risks. Aid in
    the selection of cost-effective countermeasures that will reduce existing
    risks to an acceptable level.
</p>

<!-- END MAIN -->
</div>

<script>
// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
</script>

</body>
</html>
