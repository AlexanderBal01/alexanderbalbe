// api/src/database/seed.ts (Update)
import { Client } from 'pg';

async function seed() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });

  try {
    await client.connect();

    // ------------------------------------------
    // 1. Schoonmaken
    // ------------------------------------------
    console.log('🧹 Tabellen leegmaken...');
    await client.query(`
      TRUNCATE TABLE navigation_items, work_experience, projects RESTART IDENTITY CASCADE
    `);

    // ------------------------------------------
    // 2. Navigatie Seeden
    // ------------------------------------------
    console.log('🧭 Navigatie toevoegen...');

    // Hoofditems
    const navQuery = `INSERT INTO navigation_items (label, path) VALUES ($1, $2) RETURNING id`;

    await client.query(navQuery, ['Home', '/']);
    await client.query(navQuery, ['Projecten', '/projecten']);
    await client.query(navQuery, ['Ervaring', '/ervaring']);
    await client.query(navQuery, ['Contact', '/contact']);

    // ------------------------------------------
    // 3. Werkervaring Seeden
    // ------------------------------------------
    console.log('💼 Werkervaring toevoegen...');

    const expQuery = `
      INSERT INTO work_experience 
      (company_name, position, start_date, end_date, description, skills) 
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    await client.query(expQuery, [
      'Laminaatshop',
      'Stagair Full-stack PHP Developer',
      '2022-02-01',
      '2022-06-30',
      'Full-stack ontwikkeling van een maatwerk facturatieplatform dat naadloos integreert met Magento-data. Daarnaast realisatie van een cross-platform mobiele applicatie (React Native) voor interne bedrijfscommunicatie, aangestuurd door een custom PHP API.',
      ['PHP', 'React Native', 'Magento', 'JavaScript', 'REST API', 'MySQL'],
    ]);

    await client.query(expQuery, [
      'Castive',
      'Jobstudent Full-stack Developer',
      '2025-01-01',
      '2025-02-28',
      'Full-stack ontwikkeling van een matchingsplatform voor de modellenindustrie. Het systeem faciliteert de connectie tussen talent en opdrachtgevers via vacaturebeheer, sollicitaties en een geïntegreerd real-time chatsysteem.',
      [
        'Next.js',
        'Supabase',
        'PostgreSQL',
        'TypeScript',
        'Realtime',
        'Auth.js',
      ],
    ]);

    await client.query(expQuery, [
      'GoGetter',
      'Jobstudent WordPress Developer',
      '2025-01-01',
      '2025-09-30',
      'Uitbreiding van de WordPress-core functionaliteit door middel van maatwerk PHP-templates. Realisatie van dynamische pagina-indelingen die automatisch gegenereerd worden op basis van gestructureerde post-data en Custom Post Types.',
      ['WordPress', 'PHP', 'ACF', 'MySQL', 'HTML/CSS'],
    ]);

    // ------------------------------------------
    // 4. Projecten Seeden
    // ------------------------------------------
    console.log('🚀 Projecten toevoegen...');

    const projQuery = `
      INSERT INTO projects 
      (title, slug, short_description, content, tags, is_featured, github_url, live_url, image_url) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;

    await client.query(projQuery, [
      'Mijn Portfolio',
      'portfolio',
      'Een Full-stack website (NestJS + TanStack Start). Gebouwd om moderne architectuur en SSR-technieken te demonstreren.',
      'Een volledig gecontaineriseerde Monorepo architectuur. De frontend maakt gebruik van TanStack Start voor Server-Side Rendering (SSR) en optimale performance, terwijl de backend draait op een robuuste NestJS API. Dit project fungeert als levend bewijs van mijn expertise in moderne web-architectuur en DevOps-praktijken. ',
      [
        'NestJS',
        'TanStack Start',
        'PostgreSQL',
        'TypeScript',
        'Docker',
        'Monorepo',
      ],
      true, // Featured
      'https://github.com/AlexanderBal01/alexanderbalbe',
      'https://alexanderbal.be',
      'http://img.alexanderbal.be/alexanderbalbe.jpeg',
    ]);

    await client.query(projQuery, [
      'Castive.be',
      'castivebe',
      'Een platform waar acteurs zich op kunnen aanmelden en bedrijven jobs kunnen posten. Op het platform kunnen acteurs de bedrijven contacteren voor een bepaalde opdracht.',
      'Een platform waar acteurs zich op kunnen aanmelden en bedrijven jobs kunnen posten. Op het platform kunnen acteurs de bedrijven contacteren voor een bepaalde opdracht.',
      ['Nextjs', 'Supabase', 'Authjs', 'TypeScript', 'Monorepo'],
      true, // Featured
      'https://github.com/AlexanderBal01/castivebe',
      '#',
      'http://img.alexanderbal.be/castive.jpg',
    ]);

    await client.query(projQuery, [
      'Peppol integratie Clean Car',
      'cleancar',
      'Voor dit project heb ik een bestaande applicatie in VB5.0 uitgebreid met ondersteuning voor het Peppol-netwerk. De kern van de oplossing is een volledig geautomatiseerde workflow waarbij facturatiegegevens direct worden omgezet naar gestandaardiseerde XML-bestanden (UBL) en representatieve PDF-documenten.',
      'Voor dit project heb ik een bestaande applicatie in VB5.0 uitgebreid met ondersteuning voor het Peppol-netwerk. De kern van de oplossing is een volledig geautomatiseerde workflow waarbij facturatiegegevens direct worden omgezet naar gestandaardiseerde XML-bestanden (UBL) en representatieve PDF-documenten.',
      ['VB5.0', 'SQL', 'Uitbreiding', 'Desktop Applicatie'],
      true, // Featured
      '#',
      '#',
      'http://img.alexanderbal.be/logo_clean_car.png',
    ]);

    await client.query(projQuery, [
      'Wordpress borgolunarossa',
      'borgolunnarossa',
      'Voor dit project heb ik een WordPress-thema volledig op maat uitgebreid en geoptimaliseerd. Door gebruik te maken van Advanced Custom Fields (ACF) heb ik een flexibele backend-structuur opgezet, waardoor complexe data eenvoudig beheersbaar wordt. Ik heb eigen PHP-templates ontwikkeld die deze data dynamisch vertalen naar de frontend, met een sterke focus op herbruikbaarheid van code en de unieke visuele identiteit van de site.',
      'Voor dit project heb ik een WordPress-thema volledig op maat uitgebreid en geoptimaliseerd. Door gebruik te maken van Advanced Custom Fields (ACF) heb ik een flexibele backend-structuur opgezet, waardoor complexe data eenvoudig beheersbaar wordt. Ik heb eigen PHP-templates ontwikkeld die deze data dynamisch vertalen naar de frontend, met een sterke focus op herbruikbaarheid van code en de unieke visuele identiteit van de site.',
      ['WordPress', 'PHP', 'ACF', 'Custom Templating'],
      false, // Featured
      '#',
      'https://borgolunarossa.eu/',
      'http://img.alexanderbal.be/borgolunarossa.png',
    ]);

    console.log('✅ Database succesvol gevuld!');
  } catch (err) {
    console.error('❌ Fout:', err);
  } finally {
    await client.end();
  }
}

seed();
