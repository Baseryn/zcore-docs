import Link from 'next/link';

// ─── Icons (zero-dependency inline SVGs with smooth transition glows) ───────────────────────────
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 dark:text-emerald-400 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 dark:text-zinc-400 shrink-0"><line x1="5" y1="12" x2="19" y2="12"/></svg>
);

const TerminalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
);

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v1m0 16v1m-8-9H3m18 0h1m-2.636-6.364l-.707-.707M6.343 17.657l-.707-.707m0-12.728l.707-.707m12.728 12.728l.707-.707"/><circle cx="12" cy="12" r="4"/></svg>
);

// New Icons for Core Pillars
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

const BlocksIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
);


// ─── Core Pillars Data ────────────────────────────────────────────
const pillars = [
  {
    icon: <ShieldIcon />,
    title: 'Context Shielding (Zchema)',
    description: 'Write one schema. Sensitive fields are pruned dynamically per-user in real-time.',
    color: 'text-emerald-500'
  },
  {
    icon: <LayersIcon />,
    title: 'Atomic Transactions',
    description: 'Group multiple operations into all-or-nothing transactions with deferred event dispatch.',
    color: 'text-amber-500'
  },
  {
    icon: <BoltIcon />,
    title: 'Scoped DI',
    description: 'Singleton, transient, and request-scoped dependencies resolved automatically.',
    color: 'text-sky-500'
  },
  {
    icon: <BlocksIcon />,
    title: 'Modular Plugins',
    description: 'Organize domains into isolated plugins with topological startup ordering.',
    color: 'text-rose-500'
  }
];

// ─── 3x3 Dynamic Grid Tool Data ───────────────────────────────────
const tools = [
  // --- Category: Independent (Green) ---
  {
    category: 'independent',
    badge: '🟢 Independent',
    name: 'Inject[T]',
    oneLine: 'Type-safe constructor dependency injection mapped directly to FastAPI Depends.',
    code: `class TaskService:
    def __init__(self, repo: Inject[Repo]):
        self.repo = repo`,
    without: 'FastAPI Depends(get_task_repo) chains',
  },
  {
    category: 'independent',
    badge: '🟢 Independent',
    name: 'UnitOfWork',
    oneLine: 'Safely group database writes. Buffers domain events to trigger only post-commit.',
    code: `async with UnitOfWork(db, disp) as uow:
    await repo.create(schema)
    uow.register_event("created", task)`,
    without: 'Manual transaction blocks',
  },
  {
    category: 'independent',
    badge: '🟢 Independent',
    name: 'EventDispatcher',
    oneLine: 'Loosely couple operations with highly concurrent async event publishing.',
    code: `@on_event("task_completed")
async def handle(payload):
    await notify_user(payload)`,
    without: 'Direct, tightly coupled method calls',
  },
  {
    category: 'independent',
    badge: '🟢 Independent',
    name: 'LocalStorageProvider',
    oneLine: 'Secure file storage armed with Magic Byte checking and Directory Traversal blocking.',
    code: `storage = LocalStorageProvider(
    "./uploads",
    [SafeMimeTypeValidator()]
)`,
    without: 'Insecure custom file streaming',
  },
  {
    category: 'independent',
    badge: '🟢 Independent',
    name: 'BaseRepository',
    oneLine: 'Complete asynchronous CRUD, Keyset Pagination, and dynamic search out of the box.',
    code: `class TaskRepo(BaseRepository[Task]):
    def __init__(self, db: AsyncSession):
        super().__init__(Task, db)`,
    without: 'Manual session.execute() queries',
  },
  {
    category: 'independent',
    badge: '🟢 Independent',
    name: 'Pagination',
    oneLine: 'High-performance Cursor (Keyset) and Offset pagination with zero boilerplate.',
    code: `paginator = CursorPagination(cursor_field="id")
result = await repo.get_list(pagination=paginator)`,
    without: 'Manual offset/limit calculations',
  },
  // --- Category: Composable (Yellow) ---
  {
    category: 'composable',
    badge: '🟡 Composable',
    name: 'BaseService',
    oneLine: 'Domain business logic layer equipped with highly overridable pre/post action hooks.',
    code: `class TaskService(BaseService[Task]):
    async def pre_create(self, schema):
        return {"slug": "slugified"}`,
    without: 'Manual procedural services',
  },
  {
    category: 'composable',
    badge: '🟡 Composable',
    name: 'SearchEngine',
    oneLine: 'Construct secure dynamic queries with recursive AND/OR filters and field restrictions.',
    code: `engine = SearchEngine(Task)
query = engine.build_query(req)`,
    without: 'Boilerplate conditional SQL logic',
  },
  {
    category: 'composable',
    badge: '🟡 Composable',
    name: 'Zchema',
    oneLine: 'Dynamic field-level pruning. Interacts with raw FastAPI routers and standard schemas.',
    code: `class TaskResponse(Zchema):
    __model__ = "tasks"
    title: str
    cost: float # hidden dynamically`,
    without: 'Writing multiple Pydantic outputs',
  },

  // --- Category: Orchestrated (Red) ---
  {
    category: 'orchestrated',
    badge: '🔴 Orchestrated',
    name: 'BaseRouter',
    oneLine: 'Generates 7 secure endpoints. Fully overridable CRUD handlers with custom route injection.',
    code: `class TaskRouter(
    BaseRouter[TaskCreate, TaskUpdate]
):
    model = Task
    service = TaskService`,
    without: '7 redundant endpoint functions',
  },
  {
    category: 'orchestrated',
    badge: '🔴 Orchestrated',
    name: 'Plugin System',
    oneLine: 'Organize domains into isolated plugins with topological startup/shutdown ordering.',
    code: `class TaskPlugin(Plugin):
    name = "tasks"
    dependencies = ["auth"]
    
    async def on_startup(self):
        await cache.warm()`,
    without: 'Manual app.on_event spaghetti',
  },
];

// ─── Adoption Steps ────────────────────────────────────────────────
const adoptionSteps = [
  {
    step: 0,
    title: 'Your existing FastAPI endpoint',
    code: `@router.post("/tasks")
async def create_task(data: TaskCreate, db: AsyncSession = Depends(get_db)):
    task = Task(**data.model_dump())
    db.add(task)
    await db.commit()
    return task`,
    note: 'Leave your legacy code exactly as it is. ZCore is backward-compatible.',
  },
  {
    step: 1,
    title: 'Add BaseRepository alone',
    code: `class TaskRepo(BaseRepository[Task]):
    def __init__(self, db: AsyncSession):
        super().__init__(model=Task, db=db)

@router.post("/tasks")
async def create_task(data: TaskCreate, repo: Inject[TaskRepo]):
    return await repo.create(data)`,
    note: 'One empty class. You now have async CRUD, search, and pagination.',
  },
  {
    step: 2,
    title: 'Now add BaseService (Optional)',
    code: `class TaskService(BaseService[Task]):
    def __init__(self, repo: Inject[TaskRepo]):
        super().__init__(model=Task, repository=repo)

    async def pre_create(self, schema: TaskCreate):
        return {"slug": slugify(schema.title)}`,
    note: 'The pre_create interceptor hook runs, merges dynamic data, and persists safely.',
  },
];


export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-[#030303] dark:text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-950 dark:selection:text-emerald-200 relative overflow-hidden font-sans transition-colors duration-300">

      {/* ── Ambient Background ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-emerald-500/5 to-teal-600/2 dark:from-emerald-500/8 dark:to-teal-600/3 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[900px] -left-32 w-[500px] h-[500px] bg-emerald-600/2 dark:bg-emerald-600/4 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[1800px] -right-32 w-[500px] h-[500px] bg-teal-600/2 dark:bg-teal-600/4 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 dark:opacity-20 pointer-events-none z-0" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 z-10">

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 1: HERO                                          */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <header className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">

          <div className="mb-10 w-full max-w-md md:max-w-lg select-none pointer-events-none filter drop-shadow-lg transition-transform duration-300 hover:scale-[1.01]">
            <img 
              src="https://raw.githubusercontent.com/Baseryn/zcore-docs/master/public/banner.png"
              alt="FastAPI ZCore Framework Logo" 
              className="w-full h-auto object-contain dark:brightness-110 dark:contrast-105"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 dark:border-emerald-500/10 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span>Python 3.11+ · Apache-2.0 · Fully Async</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Build with FastAPI.
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 dark:from-emerald-200 dark:via-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">
              Add ZCore where it helps.
            </span>
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            A pragmatically engineered architectural framework built on top of FastAPI.
            Absolute freedom. No rigid constraints. Use only what you need, and override everything else.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs/quick-start"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:text-zinc-950 transition px-6 py-3 text-sm font-semibold shadow-lg shadow-emerald-500/10"
            >
              Quick Start <ChevronRight />
            </Link>
            <a
              href="https://github.com/baseryn/zcore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 dark:text-zinc-300 transition px-6 py-3 text-sm font-semibold"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 1.5: CORE PILLARS (New Section)                  */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/30 backdrop-blur-sm flex flex-col gap-3">
                <div className={`${p.color}`}>{p.icon}</div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 2: 30-SECOND DEMO                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
              <SparkleIcon /> 30-SECOND PREVIEW
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-3">
              An Empty Repository. Complete CRUD.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto text-sm">
              No complex setup or rigid base-class nesting. Get production-ready database interactions in two steps.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800/80 rounded-2xl bg-zinc-950 overflow-hidden shadow-2xl max-w-3xl mx-auto">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-900 bg-zinc-950/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs text-zinc-500 font-mono select-none">repo.py</div>
              <div className="w-12" />
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed text-zinc-100 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="text-zinc-600 mb-3"># Step 1: Your standard SQLAlchemy model</div>
              <div><span className="text-emerald-400">class</span> <span className="text-emerald-300">Task</span>(Base):</div>
              <div className="pl-4">__tablename__ = <span className="text-green-400">&quot;tasks&quot;</span></div>
              <div className="pl-4">id: Mapped[uuid.UUID] = mapped_column(primary_key=<span className="text-emerald-400">True</span>, default=uuid.uuid4)</div>
              <div className="pl-4">title: Mapped[str]</div>
              <div className="pl-4 mb-5">is_completed: Mapped[bool] = mapped_column(default=<span className="text-emerald-400">False</span>)</div>

              <div className="text-zinc-600 mb-3"># Step 2: Inheritance yields async CRUD, keyset pagination, and secure search</div>
              <div><span className="text-emerald-400">from</span> zcore <span className="text-emerald-400">import</span> BaseRepository</div>
              <br/>
              <div><span className="text-emerald-400">class</span> <span className="text-emerald-300">TaskRepo</span>(BaseRepository[Task]):</div>
              <div className="pl-4"><span className="text-emerald-400">def</span> <span className="text-emerald-300">__init__</span>(self, db: AsyncSession):</div>
              <div className="pl-8">super().__init__(model=Task, db=db)</div>
            </div>

            <div className="px-6 py-4 border-t border-zinc-900 bg-emerald-500/5 flex items-center gap-3">
              <CheckIcon />
              <span className="text-xs text-emerald-400 font-semibold">Async methods, pagination, and policy-guarded search — out of the box.</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-6 flex items-start gap-3 px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800/60 dark:bg-zinc-900/30">
            <MinusIcon />
            <div>
              <div className="text-sm text-zinc-800 dark:text-zinc-300 font-medium mb-1">Or write raw SQLAlchemy query statements instead.</div>
              <div className="text-xs text-zinc-500 dark:text-zinc-500">Every single component in ZCore is completely optional. Ignore BaseRepository entirely whenever your logic calls for raw query manipulation.</div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 3: PICK WHAT YOU NEED — Tool Cards (3x3 Grid)    */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Pick Only What You Need.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm">
              Modular components. Decoupled by design.
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">Adopt the architectural patterns that simplify your workload, and leave the rest to native FastAPI.</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10 text-xs text-zinc-600 dark:text-zinc-500">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Independent — works completely alone</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Composable — pairs with DB/Model logic</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500" /> Orchestrated — unified framework infrastructure</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className={`group p-6 rounded-2xl border bg-white/70 dark:bg-zinc-950/30 backdrop-blur-sm transition flex flex-col justify-between hover:scale-[1.01] hover:shadow-xl duration-300 ${
                  tool.category === 'independent'
                    ? 'border-emerald-500/10 hover:border-emerald-500/30 dark:border-emerald-500/10 dark:hover:border-emerald-500/30 hover:shadow-emerald-500/5'
                    : tool.category === 'composable'
                    ? 'border-amber-500/10 hover:border-amber-500/30 dark:border-amber-500/10 dark:hover:border-amber-500/30 hover:shadow-amber-500/5'
                    : 'border-rose-500/10 hover:border-rose-500/30 dark:border-rose-500/10 dark:hover:border-rose-500/30 hover:shadow-rose-500/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono tracking-tight">{tool.name}</span>
                    <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                      tool.category === 'independent'
                        ? 'text-emerald-600 bg-emerald-500/5 border-emerald-500/10 dark:text-emerald-400'
                        : tool.category === 'composable'
                        ? 'text-amber-600 bg-amber-500/5 border-amber-500/10 dark:text-amber-400'
                        : 'text-rose-600 bg-rose-500/5 border-rose-500/10 dark:text-rose-400'
                    }`}>{tool.badge}</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">{tool.oneLine}</p>
                </div>

                <div>
                  <div className="bg-zinc-950 dark:bg-zinc-900/60 rounded-xl px-4 py-3 border border-zinc-900 font-mono text-[11px] leading-relaxed text-zinc-300 mb-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <pre className="whitespace-pre">{tool.code}</pre>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 font-sans border-t border-zinc-200 dark:border-zinc-900 pt-3">
                    <MinusIcon />
                    <span>Without: <span className="text-zinc-700 dark:text-zinc-400">{tool.without}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/5">
            <div className="flex items-start gap-3">
              <div className="text-emerald-600 dark:text-emerald-400 mt-0.5"><SparkleIcon /></div>
              <div>
                <div className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-1">Total Overridability. No Framework Lock-In.</div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Need to customize how <code className="text-zinc-800 dark:text-zinc-300 bg-zinc-200/50 dark:bg-zinc-800/60 px-1 py-0.5 rounded text-[11px]">BaseRepository.create</code> behaves? Just override it. Need specialized data transformations inside a service? Override <code className="text-zinc-800 dark:text-zinc-300 bg-zinc-200/50 dark:bg-zinc-800/60 px-1 py-0.5 rounded text-[11px]">pre_create</code> or <code className="text-zinc-800 dark:text-zinc-300 bg-zinc-200/50 dark:bg-zinc-800/60 px-1 py-0.5 rounded text-[11px]">post_create</code>. You are never boxed into framework assumptions.
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 4: GRADUAL ADOPTION                              */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Adopt Gradually. Scale Comfortably.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm">
              Start with plain FastAPI code. Introduce architectural helper layers one-by-one as your codebase expands. Each step is fully backward-compatible.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {adoptionSteps.map((item) => (
              <div key={item.step} className="border border-zinc-200 dark:border-zinc-800/80 rounded-2xl bg-white/70 dark:bg-zinc-950/30 backdrop-blur-sm overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-200 dark:border-zinc-900">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-bold">
                    {item.step}
                  </span>
                  <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.title}</span>
                </div>

                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-zinc-950 text-zinc-300 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <pre className="whitespace-pre">{item.code}</pre>
                </div>

                <div className="px-6 py-3 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-100/50 dark:bg-zinc-900/20 text-xs text-zinc-500 flex items-center gap-2">
                  <CheckIcon /> {item.note}
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 px-6 py-5 rounded-2xl border border-zinc-200 dark:border-zinc-800/60 bg-zinc-100/50 dark:bg-zinc-900/20">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-sm font-bold shrink-0">3</span>
              <div>
                <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-300 mb-1">Adopt Orchestrated Layers, or Stop Exactly Here.</div>
                <div className="text-xs text-zinc-500 leading-relaxed">
                  You can use <code className="text-zinc-600 dark:text-zinc-400 font-mono">BaseRepository</code> completely on its own forever. Or, opt to plug in <code className="text-zinc-600 dark:text-zinc-400 font-mono">Zchema</code> for security constraints, <code className="text-zinc-600 dark:text-zinc-400 font-mono">UnitOfWork</code> for database transactional safety, or <code className="text-zinc-600 dark:text-zinc-400 font-mono">BaseRouter</code> to avoid endpoint boilerplates. <span className="text-zinc-700 dark:text-zinc-300">No single step enforces the adoption of another.</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 5: DECISION TABLE                                */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-4">When do I need this?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto text-sm">
              A transparent comparison. If the native route satisfies your architectural requirements, bypass the ZCore component.
            </p>
          </div>

          <div className="max-w-3xl mx-auto border border-zinc-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden bg-white/70 dark:bg-transparent backdrop-blur-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-zinc-100 dark:bg-zinc-900/60 text-left">
                  <th className="px-6 py-4 font-semibold text-zinc-700 dark:text-zinc-300 w-[45%]">When you want to...</th>
                  <th className="px-6 py-4 font-semibold text-emerald-600 dark:text-emerald-400 w-[27%]">Use this</th>
                  <th className="px-6 py-4 font-semibold text-zinc-400 dark:text-zinc-500 w-[28%]">Or write this natively</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-900">
                <tr className="bg-white/40 dark:bg-zinc-950/30">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Avoid writing redundant CRUD queries for every model</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">BaseRepository</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">SQLAlchemy queries</td>
                </tr>
                <tr className="bg-zinc-50/40 dark:bg-zinc-950/20">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Orchestrate domain logic hooks before/after DB writes</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">BaseService</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">Manual route logic</td>
                </tr>
                <tr className="bg-white/40 dark:bg-zinc-950/30">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Prune schema attributes dynamically based on user roles</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">Zchema</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">Multiple Pydantic models</td>
                </tr>
                <tr className="bg-zinc-50/40 dark:bg-zinc-950/20">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Ensure multiple writes succeed atomically or fail completely</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">UnitOfWork</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">session.commit() blocks</td>
                </tr>
                <tr className="bg-white/40 dark:bg-zinc-950/30">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Scaffold all 7 CRUD endpoints without route boilerplate</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">BaseRouter</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">Individual route functions</td>
                </tr>
                <tr className="bg-zinc-50/40 dark:bg-zinc-950/20">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Auto-wire repositories into services elegantly</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">Inject[T]</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">Depends() parameters</td>
                </tr>
                <tr className="bg-white/40 dark:bg-zinc-950/30">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Dispatch events cleanly after a transaction commits</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">EventDispatcher</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">Manual listener triggers</td>
                </tr>
                <tr className="bg-zinc-50/40 dark:bg-zinc-950/20">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Handle large datasets with high-performance cursor paging</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">Pagination</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">Manual offset/limit math</td>
                </tr>
                <tr className="bg-white/40 dark:bg-zinc-950/30">
                  <td className="px-6 py-4 text-zinc-800 dark:text-zinc-300">Structure domain modules with topological startup order</td>
                  <td className="px-6 py-4 text-emerald-600 dark:text-emerald-400 font-medium font-mono">Plugin System</td>
                  <td className="px-6 py-4 text-zinc-400 dark:text-zinc-500">Spaghetti app.on_event</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-3xl mx-auto mt-6 text-center">
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              <span className="text-zinc-600 dark:text-zinc-400 font-medium">Core Architecture Note:</span> Every alternative in the right-hand column is completely valid, production-ready FastAPI code. ZCore simply streamlines the process, giving you the exact same outcomes with less code.
            </p>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 6: CLI QUICK START                               */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Scaffold & Run
              <br />
              in 30 Seconds.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
              The built-in CLI handles project bootstrapping, modular domain app setups, and template generation. 
              <span className="text-zinc-400 dark:text-zinc-500"> Get clean base files, then customize, delete, or override whatever you want.</span>
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition"
            >
              CLI reference <ChevronRight />
            </Link>
          </div>

          <div className="border border-zinc-800/80 rounded-xl bg-zinc-950 p-5 font-mono text-xs leading-normal relative text-zinc-100 shadow-2xl">
            <div className="absolute top-4 right-4 text-zinc-600">
              <TerminalIcon />
            </div>
            <div><span className="text-zinc-600">$</span> pip install fastapi-zcore-framework[all]</div>
            <br/>
            <div><span className="text-zinc-600">$</span> zc init my_app <span className="text-zinc-600">&&</span> cd my_app</div>
            <div className="text-emerald-400">✔ Generated: main.py, .env, requirements.txt, .gitignore</div>
            <br/>
            <div><span className="text-zinc-600">$</span> zc startapp tasks --template</div>
            <div className="text-emerald-400">✔ Generated Domain: model, schemas, repo, service, router, plugin</div>
            <br/>
            <div><span className="text-zinc-600">$</span> zc run</div>
            <div className="text-zinc-500">INFO:     Uvicorn running on http://127.0.0.1:8000</div>
            <div className="text-green-500">✔ FastAPI application is running with ZCore plugins active</div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 7: DYNAMIC SCHEMA GENERATION                     */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="border border-zinc-800/80 rounded-xl bg-zinc-950 p-5 font-mono text-xs leading-normal relative text-zinc-100 shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="absolute top-4 right-4 text-zinc-600">
                <TerminalIcon />
              </div>
              <div><span className="text-zinc-600">$</span> curl http://localhost:8000/tasks?schema=true</div>
              <br />
              <div className="text-zinc-500"># Response JSON dynamically pruned according to requester scope:</div>
              <div className="text-emerald-400">{`{`}</div>
              <div className="text-emerald-400 pl-4">{`"success": true,`}</div>
              <div className="text-emerald-400 pl-4">{`"data": {`}</div>
              <div className="text-emerald-400 pl-8">{`"title": "tasks",`}</div>
              <div className="text-emerald-400 pl-8">{`"properties": {`}</div>
              <div className="text-emerald-400 pl-12">{`"id": { "type": "string" },`}</div>
              <div className="text-emerald-400 pl-12">{`"title": { "type": "string" }`}</div>
              <div className="text-zinc-600 pl-12"># "cost" property is dynamically omitted due to security policies</div>
              <div className="text-emerald-400 pl-8">{`}`}</div>
              <div className="text-emerald-400 pl-4">{`}`}</div>
              <div className="text-emerald-400">{`}`}</div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Real-Time UI Generation
                <br />
                with <code className="text-emerald-600 dark:text-emerald-400 font-mono text-2xl bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">?schema=true</code>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                Avoid hardcoding your frontend forms. When appending <code className="text-zinc-700 dark:text-zinc-300 bg-zinc-200/50 dark:bg-zinc-800/60 px-1 py-0.5 rounded font-mono text-xs">?schema=true</code> to any ZCore route, the framework intercepts the request, dynamically inspects the authenticated user&apos;s permissions, prunes forbidden attributes, and yields the secure, tailored JSON Schema representation in real-time.
              </p>
              <div className="space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-start gap-2"><CheckIcon /> <span>Directly build automated forms on Retool, Appsmith, or custom admin panels.</span></div>
                <div className="flex items-start gap-2"><CheckIcon /> <span>Eliminates data models mismatch between client and server fields.</span></div>
                <div className="flex items-start gap-2"><CheckIcon /> <span>Outputs metadata including restricted paths active in the user context.</span></div>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 8: THE ROADMAP — ZCore Admin                     */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28">
          <div className="max-w-4xl mx-auto rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.02] dark:border-emerald-500/10 dark:bg-emerald-500/[0.01] p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 rounded-full mb-4 font-mono">
                  ✨ COMING SOON / ROADMAP
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  The Dynamic Admin Panel
                </h2>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  We are conceptualizing a highly modular, lightning-fast administrative dashboard for FastAPI, natively powered by the ZCore core architecture.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <CheckIcon /> <span>Reporting via <code className="font-mono text-zinc-800 dark:text-zinc-300">SearchEngine</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon /> <span>Dynamic UI built with <code className="font-mono text-zinc-800 dark:text-zinc-300">Zchema</code></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon /> <span>Code-free automatic CRUDs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon /> <span>Fully async websocket logs</span>
                  </div>
                </div>
              </div>

              <div className="border border-emerald-500/10 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950 p-6 rounded-2xl w-full md:w-64 shrink-0 text-center shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3 text-emerald-600 dark:text-emerald-400">
                  <SparkleIcon />
                </div>
                <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                  Active R&D Phase
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed">
                  We are actively researching this module to ensure zero performance compromise before releasing it.
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 9: OVERRIDABILITY                               */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Built to be Overridden.</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm">
              Working defaults when you want speed. 
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">Complete control when your business logic demands a customized path.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-950/30 backdrop-blur-sm shadow-sm">
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400/80 mb-3">BaseRepository</div>
              <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                <div className="flex items-center gap-2"><CheckIcon /> <span>create</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span>update_multi</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span>get_list</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span>search</span></div>
                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500"><MinusIcon /> <span className="text-xs font-sans">Override any DB action</span></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-950/30 backdrop-blur-sm shadow-sm">
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400/80 mb-3">BaseService</div>
              <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                <div className="flex items-center gap-2"><CheckIcon /> <span>pre_create</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span>post_create</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span>pre_update</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span>post_delete</span></div>
                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500"><MinusIcon /> <span className="text-xs font-sans">Extend or block writes</span></div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-950/30 backdrop-blur-sm shadow-sm">
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400/80 mb-3">BaseRouter</div>
              <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center gap-2"><CheckIcon /> <span className="text-xs font-mono">Override create_endpoint, get_endpoint, etc.</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span className="text-xs font-mono">Add custom routes directly to router.router</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span className="text-xs font-mono">Select active endpoints via RouteKey</span></div>
                <div className="flex items-center gap-2"><CheckIcon /> <span className="text-xs font-mono">Dynamic query schema exports (?schema=true)</span></div>
                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500"><MinusIcon /> <span className="text-xs font-sans">Optionally bypass router entirely</span></div>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════ */}
        {/*  SECTION 10: CTA FOOTER                                   */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <section className="border-t border-zinc-200 dark:border-zinc-900 pt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Your FastAPI codebase. ZCore where it helps.
          </h2>
          <p className="text-zinc-500 text-sm mb-8 max-w-md mx-auto">
            Enjoy development freedom. Standardize structures, protect endpoints, and manage atomic transactions only where you want to.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/docs"
              className="px-6 py-2.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-sm font-semibold transition"
            >
              Read the Docs
            </Link>
            <a
              href="https://github.com/baseryn/zcore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg border border-zinc-200 bg-white/40 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 text-sm font-semibold transition"
            >
              GitHub
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}