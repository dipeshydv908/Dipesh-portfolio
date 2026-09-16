import os

# 1. CodeUp AI Edge Internship Program
svg_codeup = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 750" width="100%" height="100%">
  <defs>
    <pattern id="codeup-bg-icons" width="80" height="80" patternUnits="userSpaceOnUse" opacity="0.08">
      <path d="M15 25 L25 15 L20 10 M40 10 L50 20 L45 25" fill="none" stroke="#263238" stroke-width="2" stroke-linecap="round"/>
      <circle cx="55" cy="55" r="10" fill="none" stroke="#263238" stroke-width="2"/>
      <path d="M52 65 L58 65 M53 68 L57 68" stroke="#263238" stroke-width="2"/>
      <rect x="10" y="45" width="18" height="24" rx="2" fill="none" stroke="#263238" stroke-width="2"/>
      <line x1="14" y1="52" x2="24" y2="52" stroke="#263238" stroke-width="1.5"/>
      <line x1="14" y1="57" x2="24" y2="57" stroke="#263238" stroke-width="1.5"/>
      <line x1="14" y1="62" x2="20" y2="62" stroke="#263238" stroke-width="1.5"/>
    </pattern>
  </defs>

  <!-- Background left white, right dark slate -->
  <rect width="750" height="750" fill="#FFFFFF"/>
  <rect width="750" height="750" fill="url(#codeup-bg-icons)"/>
  
  <!-- Right dark bar -->
  <rect x="750" y="0" width="250" height="750" fill="#252D37"/>
  
  <!-- Vertical Watermark on Dark Bar -->
  <g fill="#374151" opacity="0.7" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-weight="900">
    <text x="875" y="320" font-size="160" text-anchor="middle" letter-spacing="4">AI</text>
    <text x="875" y="550" font-size="110" text-anchor="middle" letter-spacing="4">EDGE</text>
  </g>

  <!-- CodeUp Brand Logo -->
  <g transform="translate(70, 60)">
    <text x="0" y="36" font-family="system-ui, sans-serif" font-weight="800" font-size="38" fill="#111827" letter-spacing="-1">code</text>
    <text x="96" y="36" font-family="system-ui, sans-serif" font-weight="800" font-size="38" fill="#00D084" letter-spacing="-1">up</text>
    <path d="M142 12 C146 16, 146 24, 142 28" fill="none" stroke="#00D084" stroke-width="4" stroke-linecap="round"/>
  </g>

  <!-- Title: Certificate -->
  <text x="70" y="225" font-family="'Georgia', serif" font-weight="bold" font-size="62" fill="#111827" letter-spacing="0.5">Certificate</text>

  <!-- Subtitle: OF AI EDGE INTERNSHIP PROGRAM -->
  <text x="70" y="270" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="17" fill="#111827" letter-spacing="2">OF AI EDGE INTERNSHIP PROGRAM</text>

  <!-- Presented to -->
  <text x="70" y="315" font-family="system-ui, sans-serif" font-size="16" fill="#374151">This Certificate is presented to</text>

  <!-- Recipient: Dipesh -->
  <text x="70" y="390" font-family="system-ui, sans-serif" font-weight="800" font-size="46" fill="#00D084" letter-spacing="0.5">Dipesh</text>

  <!-- Description -->
  <text x="70" y="445" font-family="system-ui, sans-serif" font-size="16" fill="#1F2937">for the successful completion of 15-Day AI Edge Internship</text>
  <text x="70" y="475" font-family="system-ui, sans-serif" font-size="16" fill="#1F2937">Program, conducted from 22 June to 08 July 2026.</text>

  <!-- Signature section -->
  <g transform="translate(70, 600)">
    <!-- Priyanka Jangid Signature -->
    <path d="M 5 30 Q 30 10, 45 35 T 70 20 Q 85 5, 100 25 T 120 15 Q 135 10, 150 22" fill="none" stroke="#1F2937" stroke-width="2.5" stroke-linecap="round"/>
    <text x="25" y="20" font-family="'Brush Script MT', 'Segoe Script', cursive" font-size="28" fill="#1F2937">Priyanka Jangid</text>
    <text x="10" y="65" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#111827" letter-spacing="1.5">SIGNATURE</text>
  </g>

  <!-- Date section -->
  <g transform="translate(500, 630)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-size="13" fill="#1F2937">10 July 2026</text>
    <text x="15" y="35" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#111827" letter-spacing="1.5">DATE</text>
  </g>
</svg>"""

with open("public/certificates/cert_codeup_aiedge.svg", "w") as f:
    f.write(svg_codeup)

# 2. LinuxWorld #13 - Python with AWS Cloud Training
svg_linuxworld = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 1200" width="100%" height="100%">
  <defs>
    <linearGradient id="lw-pill-grad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#F97316"/>
    </linearGradient>
  </defs>

  <!-- Clean white background with soft gradient -->
  <rect width="850" height="1200" fill="#FFFFFF"/>

  <!-- Top Geometric constellation mesh in top right -->
  <g transform="translate(480, 40)" opacity="0.85">
    <line x1="50" y1="120" x2="150" y2="50" stroke="#EF4444" stroke-width="1.5"/>
    <line x1="150" y1="50" x2="280" y2="70" stroke="#A855F7" stroke-width="1.5"/>
    <line x1="150" y1="50" x2="190" y2="180" stroke="#3B82F6" stroke-width="1.5"/>
    <line x1="50" y1="120" x2="190" y2="180" stroke="#F59E0B" stroke-width="1.5"/>
    <line x1="190" y1="180" x2="280" y2="70" stroke="#06B6D4" stroke-width="1.5"/>
    <line x1="280" y1="70" x2="330" y2="190" stroke="#EC4899" stroke-width="1.5"/>
    <line x1="190" y1="180" x2="270" y2="280" stroke="#10B981" stroke-width="1.5"/>
    <line x1="280" y1="70" x2="270" y2="280" stroke="#8B5CF6" stroke-width="1.5"/>
    <line x1="330" y1="190" x2="270" y2="280" stroke="#3B82F6" stroke-width="1.5"/>
    
    <!-- Nodes -->
    <circle cx="50" cy="120" r="4" fill="#EF4444"/>
    <circle cx="150" cy="50" r="5" fill="#A855F7"/>
    <circle cx="280" cy="70" r="4" fill="#3B82F6"/>
    <circle cx="190" cy="180" r="6" fill="#F59E0B"/>
    <circle cx="330" cy="190" r="5" fill="#EC4899"/>
    <circle cx="270" cy="280" r="5" fill="#10B981"/>
  </g>

  <!-- Right Watermark text -->
  <g transform="translate(800, 600) rotate(90)" fill="#E2E8F0" font-family="system-ui, sans-serif" font-weight="900" font-size="64" letter-spacing="8" opacity="0.6">
    <text text-anchor="middle">LEARN TO LEAD</text>
  </g>

  <!-- Left Header: LinuxWorld Logo & #13 -->
  <g transform="translate(60, 60)">
    <!-- Red W stylized -->
    <path d="M 5 10 L 15 45 L 25 25 L 35 45 L 45 10" fill="none" stroke="#DC2626" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/>
    <text x="60" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="18" fill="#1E293B" letter-spacing="1">LINUXWORLD</text>
    
    <text x="195" y="38" font-family="system-ui, sans-serif" font-weight="900" font-size="44" fill="#1E293B">#13</text>
    <text x="195" y="54" font-family="system-ui, sans-serif" font-weight="700" font-size="11" fill="#64748B" letter-spacing="0.5">LEARN TO LEAD</text>
  </g>

  <!-- Main Certificate Title -->
  <text x="60" y="240" font-family="system-ui, sans-serif" font-weight="800" font-size="48" fill="#1E293B" letter-spacing="1">CERTIFICATE</text>
  <text x="60" y="300" font-family="system-ui, sans-serif" font-weight="800" font-size="48" fill="#1E293B" letter-spacing="1">OF TRAINING</text>

  <!-- Gradient Pill Banner -->
  <rect x="60" y="340" width="370" height="36" rx="18" fill="url(#lw-pill-grad)"/>
  <text x="80" y="364" font-family="system-ui, sans-serif" font-weight="600" font-size="15" fill="#FFFFFF">This Certificate is hereby bestowed upon</text>

  <!-- Recipient Name: Dipesh -->
  <text x="60" y="450" font-family="system-ui, sans-serif" font-weight="900" font-size="56" fill="#0F172A">Dipesh</text>

  <!-- Subheading -->
  <text x="60" y="505" font-family="system-ui, sans-serif" font-weight="700" font-size="19" fill="#1E293B">For attending an exceptional in-depth</text>

  <!-- Program Name: Python with AWS Cloud Training -->
  <g font-family="system-ui, sans-serif" font-weight="900" font-size="34">
    <text x="60" y="555" fill="#00D084">Python with </text>
    <text x="270" y="555" fill="#F97316">AWS Cloud Training</text>
  </g>

  <!-- Detailed description paragraph -->
  <g font-family="system-ui, sans-serif" font-size="13" fill="#334155">
    <text x="60" y="605">A 20+ hours of hands-on Python with AWS Cloud training featuring</text>
    <text x="60" y="627">practical demonstrations and real-world projects that covered Python</text>
    <text x="60" y="649">Fundamentals | Data Types | Operators | Strings | Conditional</text>
    <text x="60" y="671">Statements | Loops | Functions | Collections | File Handling | Exception</text>
    <text x="60" y="693">Handling | Object-Oriented Programming (OOP) | Modules &amp; Packages |</text>
    <text x="60" y="715">REST APIs &amp; JSON | Cloud Computing Fundamentals | IAM | AWS CLI |</text>
    <text x="60" y="737">Boto3 | Amazon EC2 | Amazon S3 | Amazon DynamoDB | AWS Lambda |</text>
    <text x="60" y="759">Amazon SNS | Amazon CloudWatch | Infrastructure Automation |</text>
    <text x="60" y="781">Logging | Security Best Practices | Production-Ready Automation | <tspan font-weight="bold">5</tspan></text>
    <text x="60" y="803"><tspan font-weight="bold">Real-World Cloud Projects</tspan> under the mentorship of Syed Jibbran Ali Sir.</text>
  </g>

  <!-- Footer Signatures and Verification -->
  <g transform="translate(60, 960)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-size="14" fill="#1E293B" font-weight="600">Certificate no</text>
    <text x="110" y="0" font-family="system-ui, sans-serif" font-size="14" fill="#475569" font-weight="500">LW-JPR-2026-5309</text>
    
    <text x="0" y="30" font-family="system-ui, sans-serif" font-size="14" fill="#1E293B" font-weight="600">Date</text>
    <text x="110" y="30" font-family="system-ui, sans-serif" font-size="14" fill="#475569" font-weight="500">13<tspan font-size="10" dy="-4">th</tspan><tspan font-size="14" dy="4"> July - 27</tspan><tspan font-size="10" dy="-4">th</tspan><tspan font-size="14" dy="4"> July, 2026</tspan></text>
  </g>

  <!-- Right Signature: Vimal Daga -->
  <g transform="translate(500, 930)">
    <path d="M 15 35 Q 40 10, 60 40 T 90 20 Q 110 5, 140 30" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
    <text x="15" y="65" font-family="system-ui, sans-serif" font-weight="700" font-size="16" fill="#1E293B">Vimal Daga</text>
    <text x="15" y="86" font-family="system-ui, sans-serif" font-size="13" fill="#64748B">Founder - #13</text>
  </g>
</svg>"""

with open("public/certificates/cert_linuxworld_aws.svg", "w") as f:
    f.write(svg_linuxworld)

# 3. IBM SkillsBuild - Generative Artificial Intelligence
svg_ibm = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 650" width="100%" height="100%">
  <!-- Top Gray Header Bar -->
  <rect width="950" height="75" fill="#B0BEC5"/>
  <text x="60" y="47" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="24" fill="#1A202C">IBM <tspan font-weight="900">SkillsBuild</tspan></text>
  <text x="890" y="47" font-family="system-ui, sans-serif" font-weight="400" font-size="22" fill="#2D3748" text-anchor="end">Completion Certificate</text>

  <!-- Main Canvas -->
  <rect y="75" width="950" height="495" fill="#F8FAFC"/>

  <!-- Left Golden Ribbon Rosette Award Icon -->
  <g transform="translate(70, 105)">
    <circle cx="36" cy="36" r="32" fill="none" stroke="#EAB308" stroke-width="6"/>
    <path d="M 22 64 L 22 105 L 36 92 L 50 105 L 50 64" fill="none" stroke="#EAB308" stroke-width="6" stroke-linejoin="round"/>
  </g>

  <!-- Center Text Content -->
  <text x="475" y="145" font-family="system-ui, sans-serif" font-size="22" fill="#2D3748" text-anchor="middle">This certificate is presented to</text>

  <!-- Recipient Name: DIPESH . -->
  <text x="475" y="215" font-family="system-ui, sans-serif" font-weight="400" font-size="44" fill="#000000" text-anchor="middle" letter-spacing="4">DIPESH .</text>

  <text x="475" y="275" font-family="system-ui, sans-serif" font-size="21" fill="#2D3748" text-anchor="middle">for the completion of</text>

  <!-- Course Title: Generative Artificial Intelligence -->
  <text x="475" y="350" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="40" fill="#000000" text-anchor="middle">Generative Artificial</text>
  <text x="475" y="405" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="40" fill="#000000" text-anchor="middle">Intelligence</text>

  <!-- Plan Code and System of Record -->
  <text x="475" y="465" font-family="system-ui, sans-serif" font-size="20" fill="#2D3748" text-anchor="middle">(PLAN-48EB3211A34F)</text>
  <text x="475" y="505" font-family="system-ui, sans-serif" font-size="18" fill="#4A5568" text-anchor="middle">According to the Your Learning Builder - Plans system of record</text>

  <!-- Bottom Gray Footer Bar -->
  <rect y="570" width="950" height="80" fill="#B0BEC5"/>
  <text x="50" y="618" font-family="system-ui, sans-serif" font-weight="800" font-size="17" fill="#1A202C">Completion date: <tspan font-weight="400">10 Aug 2026 (GMT)</tspan></text>
</svg>"""

with open("public/certificates/cert_ibm_genai.svg", "w") as f:
    f.write(svg_ibm)

# 4. TCS iON - Career Edge - Young Professional
svg_tcs = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <!-- Outer Dark Border -->
  <rect width="1000" height="700" fill="#1E293B"/>
  <rect x="8" y="8" width="984" height="684" fill="#FFFFFF"/>

  <!-- Flowing Abstract Ribbon Waves at Top -->
  <path d="M 0 0 C 300 120, 600 -40, 1000 70 L 1000 0 Z" fill="#0284C7" opacity="0.9"/>
  <path d="M 0 50 C 400 160, 700 0, 1000 140 L 1000 0 L 0 0 Z" fill="#0F172A" opacity="0.95"/>
  <path d="M 0 90 C 350 20, 650 150, 1000 30" fill="none" stroke="#F59E0B" stroke-width="2.5" opacity="0.8"/>
  <path d="M 300 200 C 600 400, 800 500, 1000 600" fill="none" stroke="#E2E8F0" stroke-width="2"/>

  <!-- TCS iON Logo (top left) -->
  <g transform="translate(30, 45)">
    <text x="0" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="34" fill="#0F172A" letter-spacing="-1">tcs</text>
    <text x="50" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="34" fill="#0284C7" letter-spacing="-1">iON</text>
    <circle cx="56" cy="7" r="4" fill="#0284C7"/>
  </g>

  <!-- TATA Logo (top right) -->
  <g transform="translate(900, 45)">
    <text x="0" y="34" font-family="system-ui, sans-serif" font-weight="900" font-size="18" fill="#0F172A" letter-spacing="4" text-anchor="end">TATA</text>
    <path d="M -30 8 L -15 26 L 0 8 M -15 10 L -15 25" fill="none" stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- Certificate Title -->
  <text x="70" y="240" font-family="system-ui, sans-serif" font-weight="800" font-size="40" fill="#334155">Certificate of Achievement</text>
  <text x="70" y="280" font-family="system-ui, sans-serif" font-size="17" fill="#475569">Congratulations</text>

  <!-- Recipient Name: Dipesh -->
  <text x="70" y="340" font-family="system-ui, sans-serif" font-weight="700" font-size="42" fill="#0284C7">Dipesh</text>

  <!-- Course description text -->
  <text x="70" y="385" font-family="system-ui, sans-serif" font-size="14" fill="#334155">
    for successfully completing <tspan font-weight="bold">TCS iON Career Edge - Young Professional</tspan> course that covers
  </text>

  <!-- Course topics modules list -->
  <g font-family="system-ui, sans-serif" font-size="11.5" fill="#475569">
    <text x="70" y="415">Communication Skills | Thinking Skills for Workplace Success | Presentation Skills | Soft Skills |</text>
    <text x="70" y="438">Resume Writing | Group Discussion Skills | Interview Skills | Business Etiquette | Effective Email Writing |</text>
    <text x="70" y="461">The Problem-Solving Mindset | Accounting Fundamentals | IT Foundational Skills | Overview of Artificial Intelligence</text>
  </g>

  <!-- Bottom Left Signature -->
  <g transform="translate(70, 530)">
    <path d="M 0 30 Q 25 10, 40 32 T 70 20 Q 90 10, 110 25 T 140 18" fill="none" stroke="#334155" stroke-width="2"/>
    <text x="0" y="25" font-family="'Brush Script MT', cursive" font-size="28" fill="#334155">Mehul Mehta</text>
    <line x1="0" y1="45" x2="180" y2="45" stroke="#CBD5E1" stroke-width="1.5"/>
    <text x="0" y="65" font-family="system-ui, sans-serif" font-weight="700" font-size="13" fill="#1E293B">Mehul Mehta</text>
    <text x="0" y="83" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">Global Delivery Head – TCS iON,</text>
    <text x="0" y="99" font-family="system-ui, sans-serif" font-size="11" fill="#64748B">Tata Consultancy Services</text>
  </g>

  <!-- Bottom Right Metadata and Certified Seal -->
  <g transform="translate(770, 550)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#334155">Start Date: <tspan font-weight="normal">29 May 2026</tspan></text>
    <text x="0" y="22" font-family="system-ui, sans-serif" font-weight="700" font-size="12" fill="#334155">End Date: <tspan font-weight="normal">14 Jun 2026</tspan></text>

    <!-- Certified Badge Seal -->
    <g transform="translate(0, 50)">
      <circle cx="20" cy="20" r="18" fill="none" stroke="#0284C7" stroke-width="2.5"/>
      <path d="M 12 20 L 17 25 L 28 14" fill="none" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round"/>
      <text x="50" y="16" font-family="system-ui, sans-serif" font-weight="800" font-size="12" fill="#0284C7" letter-spacing="1">CERTIFIED</text>
      <text x="50" y="30" font-family="system-ui, sans-serif" font-size="8.5" fill="#64748B">Cert ID: 272697-32356944-1016</text>
      <text x="50" y="42" font-family="system-ui, sans-serif" font-size="8.5" fill="#64748B">Date: 14 Jun 2026</text>
    </g>
  </g>
</svg>"""

with open("public/certificates/cert_tcs_career_edge.svg", "w") as f:
    f.write(svg_tcs)

# 5. Global Institute of Technology - CODEFIESTA Hackathon 4.0
svg_codefiesta = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <!-- Outer White Container -->
  <rect width="1000" height="700" fill="#FFFFFF"/>

  <!-- Left Deep Blue Circuit PCB Pattern Sidebar -->
  <rect x="0" y="0" width="220" height="700" fill="#0F172A"/>
  
  <!-- Circuit lines in sidebar -->
  <g stroke="#3B82F6" stroke-width="1.5" opacity="0.4" fill="none">
    <path d="M 20 50 L 20 200 L 50 230 L 50 400 L 20 430 L 20 650"/>
    <circle cx="20" cy="50" r="3" fill="#3B82F6"/>
    <circle cx="20" cy="650" r="3" fill="#3B82F6"/>
    <path d="M 200 80 L 170 110 L 170 300 L 200 330 L 200 600"/>
    <circle cx="200" cy="80" r="3" fill="#3B82F6"/>
    <path d="M 80 0 L 80 150 L 110 180 L 110 500 L 80 530 L 80 700"/>
  </g>

  <!-- Giant Vertical Text: CERTIFICATE OF ACHIEVEMENT -->
  <g transform="translate(130, 480) rotate(-90)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-weight="900" font-size="44" fill="#FFFFFF" letter-spacing="4">CERTIFICATE</text>
    <text x="0" y="42" font-family="system-ui, sans-serif" font-weight="800" font-size="28" fill="#93C5FD" letter-spacing="4">OF ACHIEVEMENT</text>
  </g>

  <!-- Top Institutional & Partner Logos -->
  <g transform="translate(250, 30)">
    <!-- Hackathon 4.0 Logo Tag -->
    <rect x="0" y="5" width="55" height="38" rx="4" fill="#7E22CE"/>
    <text x="27" y="24" font-family="system-ui, sans-serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle">HACKATHON</text>
    <text x="27" y="36" font-family="system-ui, sans-serif" font-weight="900" font-size="12" fill="#FFFFFF" text-anchor="middle">4.0</text>

    <!-- Divider -->
    <line x1="70" y1="5" x2="70" y2="45" stroke="#94A3B8" stroke-width="2"/>

    <!-- GIT Global Institute of Technology Logo -->
    <circle cx="95" cy="25" r="16" fill="#0284C7"/>
    <text x="95" y="29" font-family="system-ui, sans-serif" font-weight="900" font-size="10" fill="#FFFFFF" text-anchor="middle">GIT</text>
    <text x="120" y="22" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="#0F172A">GLOBAL</text>
    <text x="120" y="36" font-family="system-ui, sans-serif" font-weight="600" font-size="8.5" fill="#475569">INSTITUTE OF TECHNOLOGY, JAIPUR</text>

    <!-- Partner Badges -->
    <g transform="translate(340, 5)">
      <!-- Google Developer Group -->
      <circle cx="15" cy="18" r="10" fill="#EA4335" opacity="0.9"/>
      <circle cx="22" cy="18" r="7" fill="#4285F4"/>
      <text x="18" y="38" font-family="system-ui, sans-serif" font-size="7" fill="#64748B" text-anchor="middle">GDG</text>

      <!-- NAAC / AICTE seals -->
      <circle cx="55" cy="18" r="12" fill="#DC2626"/>
      <text x="55" y="22" font-family="system-ui, sans-serif" font-weight="900" font-size="7" fill="#FFFFFF" text-anchor="middle">NAAC</text>

      <circle cx="90" cy="18" r="12" fill="#2563EB"/>
      <text x="90" y="22" font-family="system-ui, sans-serif" font-weight="900" font-size="7" fill="#FFFFFF" text-anchor="middle">IIC</text>
    </g>

    <!-- Powered By H2S -->
    <g transform="translate(500, 10)">
      <text x="0" y="14" font-family="system-ui, sans-serif" font-weight="700" font-size="8" fill="#64748B">POWERED BY</text>
      <text x="0" y="30" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#0284C7">H2S</text>
    </g>
  </g>

  <!-- Big Central Headline -->
  <g transform="translate(250, 140)">
    <text x="250" y="40" font-family="system-ui, sans-serif" font-weight="900" font-size="44" fill="#6B21A8" text-anchor="middle" letter-spacing="2">CODEFIESTA</text>
    
    <!-- Sub words -->
    <text x="250" y="70" font-family="system-ui, sans-serif" font-weight="800" font-size="13" fill="#6B21A8" text-anchor="middle" letter-spacing="6">IDEAS   LEARN   TECH   HACK   WIN</text>

    <!-- Giant HACKATHON 4.0 -->
    <text x="250" y="160" font-family="system-ui, sans-serif" font-weight="900" font-size="78" fill="#7E22CE" text-anchor="middle" letter-spacing="3">HACKATHON 4.0</text>
    
    <!-- Year 2025 vertical -->
    <g transform="translate(580, 75)" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="#6B21A8">
      <text x="0" y="0">2</text>
      <text x="0" y="15">0</text>
      <text x="0" y="30">2</text>
      <text x="0" y="45">5</text>
    </g>
  </g>

  <!-- Award text -->
  <text x="500" y="360" font-family="system-ui, sans-serif" font-size="17" fill="#1F2937" text-anchor="middle">This certificate is proudly presented to</text>

  <!-- Recipient Name: Dipesh -->
  <text x="500" y="420" font-family="system-ui, sans-serif" font-weight="900" font-size="46" fill="#7E22CE" text-anchor="middle">Dipesh</text>

  <!-- Event description -->
  <text x="500" y="465" font-family="system-ui, sans-serif" font-size="15" fill="#1F2937" text-anchor="middle">
    for participating in <tspan font-weight="bold">CODEFIESTA 4.0 (24 Hr. Hackathon)</tspan> organized by
  </text>
  <text x="500" y="495" font-family="system-ui, sans-serif" font-size="15" fill="#1F2937" text-anchor="middle">
    <tspan font-weight="bold">Global Institute of Technology, Jaipur</tspan> held on 09th–10th Oct 2025.
  </text>

  <!-- Bottom Signatures -->
  <g transform="translate(320, 560)">
    <path d="M 10 30 Q 35 10, 55 35 T 90 20 Q 110 10, 130 25" fill="none" stroke="#1F2937" stroke-width="2"/>
    <line x1="0" y1="45" x2="160" y2="45" stroke="#94A3B8" stroke-width="1.5"/>
    <text x="0" y="68" font-family="system-ui, sans-serif" font-weight="800" font-size="14" fill="#0F172A">Dr. Pradeep Jha</text>
    <text x="0" y="86" font-family="system-ui, sans-serif" font-size="12" fill="#475569">Convener</text>
  </g>

  <g transform="translate(640, 560)">
    <path d="M 20 35 Q 35 10, 50 35 T 80 15 Q 95 10, 110 28" fill="none" stroke="#1F2937" stroke-width="2"/>
    <line x1="0" y1="45" x2="160" y2="45" stroke="#94A3B8" stroke-width="1.5"/>
    <text x="0" y="68" font-family="system-ui, sans-serif" font-weight="800" font-size="14" fill="#0F172A">Dr. I. C. Sharma</text>
    <text x="0" y="86" font-family="system-ui, sans-serif" font-size="12" fill="#475569">Principal</text>
  </g>
</svg>"""

with open("public/certificates/cert_codefiesta_git.svg", "w") as f:
    f.write(svg_codefiesta)

print("All 5 authentic SVG certificates generated successfully!")
