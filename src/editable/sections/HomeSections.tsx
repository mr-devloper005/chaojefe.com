import Link from 'next/link'
import { ArrowRight, Bookmark, ExternalLink, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getExcerpt(post?: SitePost | null, limit = 130) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function LargeImageCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-xl border border-[var(--editable-border)] bg-white shadow-[0_18px_58px_rgba(30,36,51,0.09)] transition hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(30,36,51,0.14)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e8edf6]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#667085]">Social bookmarking</p>
        <h2 className="mt-3 text-2xl font-black leading-tight text-[#202637]">{post.title}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#667085]">{getExcerpt(post, 140)}</p>
        <div className="mt-5 flex items-center justify-between border-t border-[var(--editable-border)] pt-4 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
          <span>3 min scan</span>
          <span>Open resource</span>
        </div>
      </div>
    </Link>
  )
}

function QuoteBookmarkCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group flex min-h-[420px] flex-col rounded-xl border border-[var(--editable-border)] bg-white p-6 shadow-[0_18px_58px_rgba(30,36,51,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(30,36,51,0.13)]">
      <div className="flex items-center justify-between">
        <Bookmark className="h-5 w-5 text-[#2f80ed]" />
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((dot) => <span key={dot} className={`h-2 w-2 rounded-full ${dot === 0 ? 'bg-[#4458e6]' : 'bg-[#e4e8f3]'}`} />)}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center py-8">
        <h2 className="text-3xl font-black leading-[1.06] text-[#202637]">{post.title}</h2>
        <p className="mt-5 line-clamp-4 text-sm leading-7 text-[#667085]">{getExcerpt(post, 180)}</p>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--editable-border)] pt-5 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">
        <span>@{slot4BrandConfig.siteName.replace(/[^a-z0-9]/gi, '').toUpperCase()}</span>
        <span className="inline-flex items-center gap-2 text-[#4458e6]">Open <ExternalLink className="h-3.5 w-3.5" /></span>
      </div>
    </Link>
  )
}

function SmallFeatureCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid gap-4 rounded-xl border border-[var(--editable-border)] bg-white p-4 shadow-[0_14px_44px_rgba(30,36,51,0.08)] transition hover:-translate-y-1 sm:grid-cols-[120px_1fr]">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#e8edf6]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0 self-center">
        <h3 className="line-clamp-3 text-lg font-black leading-tight text-[#202637]">{post.title}</h3>
        <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-[#667085]">{index + 2} min scan</p>
      </div>
    </Link>
  )
}

function CompactResourceCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const dark = index % 4 === 0
  return (
    <Link href={href} className={`group block overflow-hidden rounded-xl border shadow-[0_14px_44px_rgba(30,36,51,0.08)] transition hover:-translate-y-1 ${dark ? 'border-[#202637] bg-[#111820] text-white' : 'border-[var(--editable-border)] bg-white text-[#202637]'}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#e8edf6]">
        <img src={getEditablePostImage(post)} alt={post.title} className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${dark ? 'opacity-50' : ''}`} />
        {dark ? <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.58))]" /> : null}
      </div>
      <div className="p-5">
        <p className={`text-[11px] font-black uppercase tracking-[0.14em] ${dark ? 'text-white/70' : 'text-[#667085]'}`}>Saved resource</p>
        <h3 className="mt-3 line-clamp-3 text-xl font-black leading-tight">{post.title}</h3>
        <p className={`mt-4 line-clamp-2 text-sm leading-6 ${dark ? 'text-white/70' : 'text-[#667085]'}`}>{getExcerpt(post, 110)}</p>
      </div>
    </Link>
  )
}

function FeatureTile({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const style = index % 3
  if (style === 0) {
    return (
      <Link href={href} className="group relative min-h-[360px] overflow-hidden rounded-xl bg-[#101820] p-5 text-white shadow-[0_24px_70px_rgba(30,36,51,0.16)] transition duration-300 hover:-translate-y-1">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.78))]" />
        <div className="relative z-10 flex min-h-[320px] flex-col justify-end">
          <p className="text-[11px] font-black uppercase tracking-[0.16em] text-white/70">Featured SBM</p>
          <h3 className="mt-3 line-clamp-3 text-3xl font-black leading-[1.02]">{post.title}</h3>
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/76">{getExcerpt(post, 110)}</p>
        </div>
      </Link>
    )
  }
  if (style === 1) {
    return (
      <Link href={href} className={`group grid overflow-hidden rounded-xl border ${pal.border} bg-white shadow-[0_18px_54px_rgba(30,36,51,0.08)] transition duration-300 hover:-translate-y-1 md:grid-cols-[0.82fr_1fr]`}>
        <div className="relative min-h-[190px] bg-[var(--slot4-media-bg)]">
          <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="p-6">
          <p className={`text-[11px] font-black uppercase tracking-[0.16em] ${pal.accentText}`}>Resource {index + 1}</p>
          <h3 className="mt-4 line-clamp-3 text-2xl font-black leading-tight text-[var(--slot4-page-text)]">{post.title}</h3>
          <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 135)}</p>
        </div>
      </Link>
    )
  }
  return (
    <Link href={href} className={`group relative overflow-hidden rounded-xl border ${pal.border} bg-[var(--slot4-accent-soft)] p-6 shadow-[0_18px_54px_rgba(30,36,51,0.08)] transition duration-300 hover:-translate-y-1`}>
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-sm">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <p className={`mt-8 text-[11px] font-black uppercase tracking-[0.16em] ${pal.accentText}`}>Curated note</p>
      <h3 className="mt-3 line-clamp-4 text-2xl font-black leading-tight text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className={`mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 125)}</p>
    </Link>
  )
}

function WideStoryCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group grid gap-4 overflow-hidden rounded-xl border ${pal.border} bg-white p-3 shadow-[0_14px_42px_rgba(30,36,51,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_58px_rgba(30,36,51,0.14)] sm:grid-cols-[150px_minmax(0,1fr)]`}>
      <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-[var(--slot4-media-bg)] sm:aspect-square">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/72 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
          Pick {index + 1}
        </span>
      </div>
      <div className="min-w-0 py-2 pr-2">
        <p className={`text-[11px] font-extrabold uppercase tracking-[0.16em] ${pal.accentText}`}>Bookmark lane</p>
        <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className={`mt-3 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 145)}</p>
      </div>
    </Link>
  )
}

function IndexPill({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group relative overflow-hidden rounded-xl border ${pal.border} bg-white p-5 shadow-[0_12px_34px_rgba(30,36,51,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(30,36,51,0.13)]`}>
      <p className={`relative text-[11px] font-black uppercase tracking-[0.16em] ${pal.accentText}`}>No. {String(index + 1).padStart(2, '0')}</p>
      <h3 className="relative mt-3 line-clamp-3 text-xl font-black leading-tight text-[var(--slot4-page-text)]">{post.title}</h3>
      <p className={`relative mt-4 line-clamp-3 text-sm leading-7 ${pal.mutedText}`}>{getExcerpt(post, 120)}</p>
      <span className="relative mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--slot4-page-text)] opacity-70">
        Open <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ') || `Come for the ${taskLabel(primaryTask).toLowerCase()}. Stay for the connection.`
  const chips = ['High DA SBM', 'Niche Boards', 'Submission Sites', 'Curated Links', 'Reference Lists', 'Fresh Resources']
  return (
    <section className={`${pal.creamBg} relative overflow-hidden`}>
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_78%_0%,rgba(255,170,188,0.32),transparent_34%),radial-gradient(circle_at_8%_70%,rgba(103,205,255,0.25),transparent_34%)]" />
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className={`${dc.type.eyebrow} text-[#4458e6]`}>{pagesContent.home.hero.badge}</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-[1.06] text-[#202637] sm:text-5xl lg:text-6xl">{heroTitle}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#667085] sm:text-lg">{pagesContent.home.hero.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {chips.map((chip) => (
              <Link key={chip} href={`${primaryRoute}?category=${encodeURIComponent(chip.toLowerCase().replace(/\s+/g, '-'))}`} className="rounded-lg border border-[var(--editable-border)] bg-white px-4 py-2 text-sm font-black text-[#202637] shadow-sm transition hover:-translate-y-0.5 hover:text-[#4458e6]">
                {chip}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={primaryRoute} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#202637] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5">Browse SBM <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/create" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--editable-border)] bg-white px-6 py-3 text-sm font-black text-[#202637] shadow-sm transition hover:-translate-y-0.5">Create bookmark</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 10)
  if (!railPosts.length) return null
  return (
    <section className={`${pal.warmBg}`}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr_1.05fr]">
          {railPosts[0] ? <LargeImageCard post={railPosts[0]} href={postHref(primaryTask, railPosts[0], primaryRoute)} /> : null}
          {railPosts[1] ? <QuoteBookmarkCard post={railPosts[1]} href={postHref(primaryTask, railPosts[1], primaryRoute)} /> : null}
          <div className="grid gap-5">
            {railPosts.slice(2, 4).map((post, index) => <SmallFeatureCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {railPosts.slice(4, 8).map((post, index) => <CompactResourceCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 8)
  if (!featured.length) return null
  return (
    <section className={`${pal.lavenderBg} relative overflow-hidden`}>
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Must-save {taskLabel(primaryTask).toLowerCase()}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-[#667085]">A Caards-inspired stream of useful SBM links, category cues, and submission-ready references.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.slice(0, 6).map((post, index) => (
            <FeatureTile key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(8)
  const feature = categoryPosts[0] || posts[0]
  const picks = categoryPosts.slice(1, 5)
  const indexPosts = categoryPosts.slice(5, 13)
  return (
    <section className={pal.grayBg}>
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <h2 className={dc.type.sectionTitle}>All the links. All the context.</h2>
          <p className={`mt-4 max-w-md text-base leading-relaxed ${pal.mutedText}`}>Find useful bookmarking pages faster. Browse categories, rich cards, and resource notes without digging through stretched link lists.</p>
          <form action="/search" className="mt-8 flex max-w-md rounded-xl border border-black/[0.08] bg-white p-2 shadow-sm">
            <input name="q" placeholder="Search SBM resources" className="min-w-0 flex-1 bg-transparent px-4 text-sm font-bold text-[#202637] outline-none placeholder:text-[#667085]" />
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#202637] px-5 py-3 text-sm font-semibold text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>
        <div className="grid gap-4">
          {picks.map((post, index) => <WideStoryCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
      {feature ? (
        <div className="mx-auto grid max-w-[var(--editable-container)] gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:px-8">
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative min-h-[420px] overflow-hidden rounded-xl bg-black text-white shadow-[0_18px_70px_rgba(0,0,0,0.16)]">
            <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.74))]" />
            <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-7 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">Featured stream</p>
              <h3 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{feature.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/78">{getExcerpt(feature, 180)}</p>
            </div>
          </Link>
          <div className="grid gap-4 sm:grid-cols-2">
            {indexPosts.map((post, index) => <IndexPill key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          </div>
        </div>
      ) : null}
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className={`${pal.panelBg} relative scroll-mt-24 overflow-hidden`}>
      <div className="relative mx-auto max-w-[var(--editable-container)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Where useful bookmarks meet intent</h2>
          <p className={`mt-4 text-lg ${pal.mutedText}`}>Explore fresh SBM resources, submission ideas, and curated links across the site.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/contact" className={dc.button.primary}>Contact us</Link></div>
        </div>
      </div>
    </section>
  )
}
