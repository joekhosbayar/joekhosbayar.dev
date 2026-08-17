/**
 * Every fact on this site comes from Joe's resume, his GitHub, or the Mighty
 * engineering documentation. Nothing here is illustrative or placeholder.
 *
 * This repository is PUBLIC. Infrastructure copy describes shape and reasoning
 * only — no account IDs, bucket names, or parameter paths.
 */

export const identity = {
  name: 'Joe Khosbayar',
  claim: 'Backend engineer on payments infrastructure at Capital One. I work on the systems that must not drop anything.',
  location: 'Centreville, Virginia',
  email: 'joekhosbayar123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joekhosbayar/',
  github: 'https://github.com/joekhosbayar',
};

/** The cover manifest — quantities, the way a record lists its contents. */
export const manifest = [
  { value: '100,000+', unit: 'transactions / day', note: 'sustained through a live PostgreSQL repartition' },
  { value: '250M+', unit: 'customer profiles', note: 'moved by a distributed-locking ETL pipeline' },
  { value: '95%', unit: 'P95 latency reduction', note: 'on high-traffic financial transactions' },
  { value: '90%', unit: 'less failover downtime', note: 'via Aurora Smart JDBC driver switchover' },
];

export type Position = {
  title: string;
  team: string;
  place: string;
  start: string;
  end: string;
  span: string;
  entries: string[];
};

/**
 * Side A is ONE track with four marked positions — a single continuous run at
 * Capital One from intern to Senior Associate, not four separate employers.
 */
export const sideA = {
  employer: 'Capital One',
  span: 'June 2022 — present',
  positions: [
    {
      title: 'Senior Associate Software Engineer',
      team: 'Backend · Payments, Bank Tech',
      place: 'McLean, VA',
      start: 'Aug 2025',
      end: 'Present',
      span: 'Aug 2025 — present',
      entries: [
        'Orchestrated a zero-downtime migration to a partitioned PostgreSQL architecture, with automated archival and pruning to hold performance at 100,000+ transactions per day.',
        'Led the end-to-end migration of high-throughput distributed infrastructure from Kafka to MSK, with zero latency impact for the Debit vertical.',
        'Resolved critical PostgreSQL bottlenecks in distributed data systems, cutting P95 latency 95% on high-traffic financial transactions.',
        'Automated integration testing for payment services, accelerating production delivery 2× while holding correctness.',
        'Built an automated provisioning and rehydration pipeline for Redis Enterprise clusters.',
        'Implemented fault-tolerant database switchover on Aurora Smart JDBC drivers, reducing downtime during failovers by 90%.',
      ],
    },
    {
      title: 'Associate Software Engineer',
      team: 'Backend · Authentication, Consumer Identity',
      place: 'McLean, VA',
      start: 'Aug 2024',
      end: 'Aug 2025',
      span: 'Aug 2024 — Aug 2025',
      entries: [
        'Architected a resilient ETL pipeline over 250M+ customer profiles using distributed locking and asynchronous processing.',
        'Deepened observability across logging, monitoring, and alerting to support system reliability.',
        'Redesigned the integration testing framework for a WebSocket service, improving reliability and correctness.',
        'Implemented blue-green deployments for zero-downtime releases and fault-tolerant rollbacks.',
      ],
    },
    {
      title: 'Software Engineering Intern',
      team: 'Enterprise Consumer Products',
      place: 'San Francisco, CA',
      start: 'Jun 2023',
      end: 'Aug 2023',
      span: 'Jun 2023 — Aug 2023',
      entries: [
        'Built a Notification Service for internal teams.',
        'Developed a REST API letting client teams configure event-based notifications.',
        'Shipped a Lambda with Slack integrations, and the front-end component for the first client — A/B testing status updates.',
      ],
    },
    {
      title: 'Software Engineering Intern',
      team: 'Enterprise Consumer Products',
      place: 'McLean, VA',
      start: 'Jun 2022',
      end: 'Aug 2022',
      span: 'Jun 2022 — Aug 2022',
      entries: [
        'Built an internal platform for Risk Associates to manage QA control automations.',
      ],
    },
  ] as Position[],
};

/**
 * Side B — one project, at depth. Sourced from the Mighty architecture
 * documentation, with every real infrastructure identifier stripped.
 */
export const sideB = {
  name: 'Mighty',
  url: 'https://themighty.gg',
  urlLabel: 'themighty.gg',
  repo: 'https://github.com/joekhosbayar/go-mighty',
  role: 'Sole engineer',
  span: 'Dec 2025 — present',
  premise:
    'A real-time multiplayer server for Mighty, the Korean trick-taking card game. Live at themighty.gg.',
  constraint: {
    headline: 'Two gigabytes of RAM and a $10 / month budget decided everything.',
    body: 'The whole stack — game server, database, cache, proxy and telemetry collector — runs on one 2 GB ARM box for about ten dollars a month. That budget puts its telemetry on a free tier that silently drops data past 10,000 metric series, failing precisely when monitoring is needed. Nearly every decision below is downstream of those limits.',
  },
  decisions: [
    {
      title: 'The cardinality rule',
      body: 'Game, user, and connection IDs are span attributes and log fields only — never metric labels, never log labels, never span names. Past 10,000 series the backend drops data silently, so unbounded labels do not degrade monitoring, they delete it. A test scans for forbidden label keys, and a helper collapses the one client-controlled field to a bounded set at every call site.',
    },
    {
      title: 'No span covers a whole connection',
      body: 'A game lasts an entire session, so a connection-length span is unreadable in a trace viewer and pins SDK memory for hours. Instead: a short handshake span for upgrade through auth, then one root span per inbound frame — ended explicitly on every exit path, never deferred, since a deferred end inside the read loop would hold every span open until the socket closed.',
    },
    {
      title: 'The collector may die; the game may not',
      body: 'The telemetry collector is the only container holding vendor credentials and the only egress path, so the game server never learns which vendor exists — swapping backends is a config change on one container. The server depends on it only by existence, so a crash-looping collector cannot take down a match. It fails quietly, which is exactly why a "telemetry blind" alert exists.',
    },
    {
      title: 'Instrumentation is off by default',
      body: 'With no exporter endpoint set, initialization installs no-op providers: no exporters, no network, no goroutines. The dev stack runs no collector and the test suite must never open a socket.',
    },
    {
      title: 'Out-of-band alarms that outlive the system watching',
      body: 'Grafana alert rules cover telemetry blindness, memory exhaustion, and a filling disk. Separately and deliberately, CloudWatch holds an instance status check, an external HTTPS probe on the health endpoint, and a budget tripwire — they work precisely when the in-band path is dead.',
    },
    {
      title: 'Secrets are read by the thing that uses them',
      body: 'Two disjoint credential sets: a data-plane set the box fetches at deploy time through its instance role, and a control-plane set that never leaves the operator laptop. OpenTofu is deliberately not allowed to read the first — it stores data-source results in state in plaintext, and a copy at rest with no consumer is pure downside.',
    },
  ],
  /**
   * What is actually running in production. Every line is sourced from the
   * Mighty engineering documentation — capability, not adjective.
   */
  capabilities: [
    {
      title: 'Authenticated real-time play',
      body: 'Full game sessions held open over WebSockets behind Cognito-backed sign-in, with an authentication timeout on the handshake, an origin allowlist, and per-user and per-IP connection caps.',
    },
    {
      title: 'Rate limiting at two layers',
      body: 'Ten messages a second with a burst of twenty on every socket, plus a Redis-backed HTTP limiter behind a custom proxy build. Both are instrumented, so whether a real player has ever been clamped is a question with an answer.',
    },
    {
      title: 'Version-checked game state',
      body: 'Every mutation is optimistically concurrency-controlled against a version, and the conflict rate is a first-class metric rather than a guess — strain on the state model is measured, not assumed.',
    },
    {
      title: 'Traces, metrics and logs that join up',
      body: 'Eight custom instruments alongside automatic HTTP, SQL pool, Redis pool and Go runtime telemetry. Every log line carries its trace and span IDs, and a derived field links a log straight through to the trace that produced it.',
    },
    {
      title: 'Migrations that gate the server',
      body: 'Schema migrations run once against a health-checked database and must exit clean before the game server is allowed to start. A half-migrated box cannot serve a match.',
    },
    {
      title: 'Alerting provisioned as code',
      body: 'Alert rules, contact point and notification policy declared in OpenTofu and version-controlled, covering telemetry blindness, memory exhaustion and disk pressure — with CloudWatch alarms held out of band for the case where the in-band path is the thing that died.',
    },
    {
      title: 'Reproducible ARM64 delivery',
      body: 'Images built for Graviton in CI, published to a private registry, and rolled out to the box over SSM — no inbound SSH, no manual step, and log rotation bounded on every container.',
    },
  ],
  deployTrap: {
    title: 'A trap worth naming',
    body: 'The object-store sync compares size and modification time. A same-length edit — flipping a comparison operator, renaming a config key while preserving column alignment — is silently skipped, leaving the box on the old file while every command reports success.',
  },
};

export const education = {
  school: 'University of Virginia',
  division: 'School of Engineering and Applied Science',
  degree: 'B.S. Computer Science',
  span: 'Aug 2021 — May 2024',
  honors: ['GPA 3.88', 'Rodman Scholar — top 5% of the Engineering class of 2024'],
  certification: 'AWS Solutions Architect Associate',
};

export const tools = [
  { group: 'Languages', items: ['Java', 'Go', 'Python', 'SQL'] },
  { group: 'Data', items: ['PostgreSQL', 'Redis', 'Kafka', 'DynamoDB'] },
  { group: 'Infrastructure', items: ['Distributed systems', 'Microservices', 'ECS', 'Lambda', 'SQS', 'S3'] },
  { group: 'Practice', items: ['REST APIs', 'Async consumers', 'CI/CD', 'Jenkins', 'Git'] },
];
