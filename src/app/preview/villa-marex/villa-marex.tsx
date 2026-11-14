"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./villa-marex.module.css";

const bookingBase =
	"https://www.booking.com/hotel/hr/villa-marex-modern-villa-with-private-pool-near-sea-pavicini-pula-istria.html";
const airbnbBase = "https://www.airbnb.com/rooms/1605882954313683712";
const mapsUrl =
	"https://www.google.com/maps/search/?api=1&query=44.9275941%2C14.0055765";

type IconName =
	| "arrow"
	| "diagonal"
	| "pin"
	| "sun"
	| "bed"
	| "people"
	| "pool"
	| "kitchen"
	| "wifi"
	| "car"
	| "snow"
	| "close"
	| "chevron"
	| "grid"
	| "menu"
	| "leaf"
	| "bath";
function Icon({
	name,
	className = "",
}: {
	name: IconName;
	className?: string;
}) {
	const paths: Record<IconName, ReactNode> = {
		arrow: (
			<>
				<path d="M4 12h16M13 5l7 7-7 7" />
			</>
		),
		diagonal: (
			<>
				<path d="M5 19 19 5M5 5h14v14" />
			</>
		),
		pin: (
			<>
				<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
				<circle cx="12" cy="10" r="2.5" />
			</>
		),
		sun: (
			<>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
			</>
		),
		bed: (
			<>
				<path d="M3 17V7m18 10V9M3 14h18M3 10h6V7H3m6 3h12M3 17v3m18-3v3" />
			</>
		),
		people: (
			<>
				<circle cx="9" cy="7" r="3" />
				<path d="M3 21v-3a6 6 0 0 1 12 0v3m2-17a3 3 0 0 1 0 6m2 11v-3a6 6 0 0 0-3-5" />
			</>
		),
		pool: (
			<>
				<path d="M3 17q3-3 6 0t6 0 6 0M3 21q3-3 6 0t6 0 6 0M7 14V5a2 2 0 0 1 4 0m3 9V5a2 2 0 0 1 4 0M7 7h7M7 11h7" />
			</>
		),
		kitchen: (
			<>
				<path d="M5 3v7a3 3 0 0 0 6 0V3M8 3v18M20 21V3c-4 2-4 8 0 10" />
			</>
		),
		wifi: (
			<>
				<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0" />
				<circle cx="12" cy="20" r=".7" />
			</>
		),
		car: (
			<>
				<path d="m4 10 2-6h12l2 6M3 10h18v9H3zM5 19v3m14-3v3M6 14h2m8 0h2" />
			</>
		),
		snow: (
			<>
				<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 3l3 3 3-3M9 21l3-3 3 3M3 10l4-1-1-4m15 9-4 1 1 4M3 14l4 1-1 4m15-9-4-1 1-4" />
			</>
		),
		close: <path d="m6 6 12 12M6 18 18 6" />,
		chevron: <path d="m8 4 8 8-8 8" />,
		grid: (
			<>
				<rect x="3" y="3" width="6" height="6" />
				<rect x="15" y="3" width="6" height="6" />
				<rect x="3" y="15" width="6" height="6" />
				<rect x="15" y="15" width="6" height="6" />
			</>
		),
		menu: <path d="M3 8h18M3 16h18" />,
		leaf: (
			<>
				<path d="M20 3C4 2 0 15 8 19c8 4 13-4 12-16ZM5 22 16 9" />
			</>
		),
		bath: (
			<>
				<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3Zm3 8v2m12-2v2M6 12V5a3 3 0 0 1 6 0m-3 2h6" />
			</>
		),
	};
	return (
		<svg
			className={className}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.35"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			{paths[name]}
		</svg>
	);
}

const photos = [
	{ id: 0, title: "A pool of your own", category: "Outdoors" },
	{ id: 1, title: "Sunny days, slow afternoons", category: "Outdoors" },
	{ id: 25, title: "Space to settle in", category: "Interiors" },
	{ id: 7, title: "A restful retreat", category: "Interiors" },
	{ id: 2, title: "Evenings on the terrace", category: "After dark" },
	{ id: 21, title: "The table is yours", category: "Outdoors" },
	{ id: 27, title: "Mornings together", category: "Interiors" },
	{ id: 24, title: "A different kind of blue", category: "After dark" },
	{ id: 11, title: "Room for everyone", category: "Interiors" },
	{ id: 17, title: "A kitchen to make your own", category: "Interiors" },
	{ id: 14, title: "Considered details", category: "Interiors" },
	{ id: 19, title: "Cook under open skies", category: "Outdoors" },
	{ id: 31, title: "Stay a little longer", category: "After dark" },
	{ id: 32, title: "When the sun goes down", category: "After dark" },
];

function Photo({
	id,
	alt,
	className = "",
	eager = false,
}: {
	id: number;
	alt: string;
	className?: string;
	eager?: boolean;
}) {
	const width = [0, 1, 24, 31, 32].includes(id) ? 1536 : 2560;
	return (
		<img
			className={className}
			src={`/villa-marex/photo-${id}.webp`}
			srcSet={`/villa-marex/photo-${id}-small.webp 800w, /villa-marex/photo-${id}.webp ${width}w`}
			sizes={eager ? "100vw" : "(max-width: 700px) 100vw, 60vw"}
			alt={alt}
			loading={eager ? "eager" : "lazy"}
			fetchPriority={eager ? "high" : "auto"}
		/>
	);
}

function Modal({
	children,
	onClose,
	label,
	wide = false,
}: {
	children: ReactNode;
	onClose: () => void;
	label: string;
	wide?: boolean;
}) {
	const dialog = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		dialog.current?.showModal();
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previous;
		};
	}, []);
	return (
		<dialog
			ref={dialog}
			className={`${styles.modal} ${wide ? styles.wideModal : ""}`}
			aria-label={label}
			onCancel={onClose}
			onClick={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
		>
			<button
				type="button"
				className={styles.closeButton}
				onClick={onClose}
				aria-label="Close dialog"
			>
				<Icon name="close" />
			</button>
			{children}
		</dialog>
	);
}

function dateKey(date: Date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function dateLabel(value: string) {
	return value
		? new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", {
				day: "numeric",
				month: "short",
				year: "numeric",
			})
		: "Select date";
}

export default function VillaMarex() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [calendar, setCalendar] = useState(false);
	const [returnToStay, setReturnToStay] = useState(false);
	const [guestPicker, setGuestPicker] = useState(false);
	const [stayOpen, setStayOpen] = useState(false);
	const [arrival, setArrival] = useState("");
	const [departure, setDeparture] = useState("");
	const [guests, setGuests] = useState(4);
	const [month, setMonth] = useState(new Date(2027, 4, 1));
	const [filter, setFilter] = useState("All moments");
	const [lightbox, setLightbox] = useState<number | null>(null);
	const [lightboxItems, setLightboxItems] = useState(photos.map((_, i) => i));
	const [showAll, setShowAll] = useState(false);
	const [daytime, setDaytime] = useState(true);
	const filtered = photos.filter(
		(photo) => filter === "All moments" || photo.category === filter,
	);
	const visiblePhotos = showAll ? filtered : filtered.slice(0, 6);
	const nights =
		arrival && departure
			? Math.round(
					(new Date(`${departure}T12:00:00`).getTime() -
						new Date(`${arrival}T12:00:00`).getTime()) /
						86400000,
				)
			: 0;

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (lightbox === null) return;
		const onKey = (event: KeyboardEvent) => {
			const direction =
				event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
			if (direction) {
				event.preventDefault();
				setLightbox((current) =>
					current === null
						? null
						: lightboxItems[
								(lightboxItems.indexOf(current) +
									direction +
									lightboxItems.length) %
									lightboxItems.length
							],
				);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [lightbox, lightboxItems]);

	function openPhoto(index: number, collection = photos) {
		setLightboxItems(collection.map((photo) => photos.indexOf(photo)));
		setLightbox(index);
	}

	function advancePhoto(direction: number) {
		if (lightbox === null) return;
		setLightbox(
			lightboxItems[
				(lightboxItems.indexOf(lightbox) + direction + lightboxItems.length) %
					lightboxItems.length
			],
		);
	}

	function closeCalendar() {
		setCalendar(false);
		if (returnToStay) {
			setStayOpen(true);
			setReturnToStay(false);
		}
	}

	function selectDate(value: string) {
		if (!arrival || departure || value <= arrival) {
			setArrival(value);
			setDeparture("");
		} else setDeparture(value);
	}

	const bookingUrl = new URL(bookingBase);
	const airbnbUrl = new URL(airbnbBase);
	if (arrival && departure) {
		bookingUrl.searchParams.set("checkin", arrival);
		bookingUrl.searchParams.set("checkout", departure);
		airbnbUrl.searchParams.set("check_in", arrival);
		airbnbUrl.searchParams.set("check_out", departure);
	}
	bookingUrl.searchParams.set("group_adults", String(guests));
	airbnbUrl.searchParams.set("adults", String(guests));

	return (
		<div className={styles.site}>
			<a className={styles.skipLink} href="#the-villa">
				Skip to the villa
			</a>
			<header
				className={`${styles.header} ${scrolled || menuOpen ? styles.headerScrolled : ""}`}
			>
				<a href="#" className={styles.brand} aria-label="Villa Marex home">
					<span className={styles.brandSymbol}>
						<Icon name="sun" />
					</span>
					<span>
						VILLA MAREX<small>YOUR ISTRIAN ESCAPE</small>
					</span>
				</a>
				<nav
					className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ""}`}
					aria-label="Main navigation"
				>
					{[
						["The villa", "#the-villa"],
						["The experience", "#experience"],
						["Gallery", "#gallery"],
						["Discover Istria", "#location"],
					].map(([label, href]) => (
						<a key={href} href={href} onClick={() => setMenuOpen(false)}>
							{label}
						</a>
					))}
				</nav>
				<div className={styles.headerActions}>
					<button
						className={styles.navBook}
						onClick={() => {
							setStayOpen(true);
							setMenuOpen(false);
						}}
					>
						Plan your stay <Icon name="diagonal" />
					</button>
					<button
						className={styles.menuButton}
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<Icon name={menuOpen ? "close" : "menu"} />
					</button>
				</div>
			</header>

			<main>
				<section className={styles.hero} aria-label="Welcome to Villa Marex">
					<Photo
						id={0}
						alt="Villa Marex and its private blue pool surrounded by a sun terrace and garden"
						className={styles.heroPhoto}
						eager
					/>
					<div className={styles.heroShade} />
					<div className={styles.heroContent}>
						<p className={styles.eyebrow}>
							<span /> PAVIĆINI, ISTRIA · CROATIA
						</p>
						<h1>
							A slower kind
							<br />
							of <em>summer.</em>
						</h1>
						<p>
							Your own little corner of Istria.
							<br />
							For sun-drenched days and the luxury of doing less.
						</p>
						<a className={styles.heroLink} href="#the-villa">
							Step inside{" "}
							<span>
								<Icon name="arrow" />
							</span>
						</a>
					</div>
					<div className={styles.heroBottom}>
						<a href="#the-villa" className={styles.scrollHint}>
							<span /> A PLACE TO EXHALE
						</a>
						<button className={styles.heroGallery} onClick={() => openPhoto(0)}>
							<Icon name="grid" /> Explore the villa <span>01 / 14</span>
						</button>
					</div>
					<span className={styles.heroCoordinates}>44°55′N &nbsp; 14°00′E</span>
				</section>

				<section className={styles.stayBar} aria-label="Plan your stay">
					<div className={styles.stayIntro}>
						<Icon name="sun" />
						<span>
							A little time,
							<br />
							<em>just for you.</em>
						</span>
					</div>
					<button
						className={styles.stayField}
						onClick={() => setCalendar(true)}
					>
						<span>CHECK IN</span>
						<strong>{dateLabel(arrival)}</strong>
						<Icon name="chevron" />
					</button>
					<button
						className={styles.stayField}
						onClick={() => setCalendar(true)}
					>
						<span>CHECK OUT</span>
						<strong>{dateLabel(departure)}</strong>
						<Icon name="chevron" />
					</button>
					<div className={styles.guestField}>
						<button
							className={styles.stayField}
							aria-expanded={guestPicker}
							onClick={() => setGuestPicker(!guestPicker)}
						>
							<span>YOUR PEOPLE</span>
							<strong>{guests} guests</strong>
							<Icon name="chevron" />
						</button>
						{guestPicker && (
							<div className={styles.guestPopover}>
								<div>
									<strong>Guests</strong>
									<small>Up to 8, all ages</small>
								</div>
								<div className={styles.stepper}>
									<button
										aria-label="Remove one guest"
										disabled={guests <= 1}
										onClick={() => setGuests(guests - 1)}
									>
										−
									</button>
									<span aria-live="polite">{guests}</span>
									<button
										aria-label="Add one guest"
										disabled={guests >= 8}
										onClick={() => setGuests(guests + 1)}
									>
										+
									</button>
								</div>
								<button
									className={styles.textButton}
									onClick={() => setGuestPicker(false)}
								>
									Done <Icon name="arrow" />
								</button>
							</div>
						)}
					</div>
					<button
						className={styles.primaryButton}
						onClick={() => {
							setGuestPicker(false);
							setStayOpen(true);
						}}
					>
						Find your escape <Icon name="arrow" />
					</button>
				</section>

				<section id="the-villa" className={`${styles.intro} ${styles.section}`}>
					<div className={styles.introCopy} data-reveal>
						<p className={styles.eyebrow}>WELCOME TO VILLA MAREX</p>
						<h2>
							Some places make
							<br />
							you feel <em>different.</em>
							<br />
							This one lets you
							<br />
							feel <em>yourself.</em>
						</h2>
						<p>
							A morning swim. Coffee in the sunshine. Nowhere you need to be.
							Tucked away in the quiet village of Pavićini, Villa Marex is your
							invitation to find a softer pace.
						</p>
						<p>
							Modern, thoughtful spaces open onto a private pool and garden.
							Bring your favourite people. Make yourself completely at home.
						</p>
						<a href="#experience" className={styles.underlinedLink}>
							Get to know your escape <Icon name="diagonal" />
						</a>
					</div>
					<div className={styles.introImages} data-reveal>
						<button
							className={styles.introMainPhoto}
							onClick={() => openPhoto(2)}
							aria-label="View the living space"
						>
							<Photo
								id={25}
								alt="Villa Marex's light-filled living room opening to the terrace"
							/>
						</button>
						<button
							className={styles.introSmallPhoto}
							onClick={() => openPhoto(3)}
							aria-label="View the bedroom"
						>
							<Photo
								id={7}
								alt="A tranquil double bedroom with warm stone textures"
							/>
						</button>
						<div className={styles.roundSeal}>
							<Icon name="sun" />
							<span>
								STAY A LITTLE.
								<br />
								FEEL A LOT.
							</span>
						</div>
						<span className={styles.imageNote}>
							A home away from the everyday.
						</span>
					</div>
				</section>

				<div className={styles.facts} data-reveal>
					{(
						[
							{ icon: "people", value: "8", text: "of your favourite people" },
							{ icon: "bed", value: "3", text: "peaceful bedrooms" },
							{ icon: "bath", value: "3 + 1", text: "bathrooms & guest WC" },
							{
								icon: "pool",
								value: "All yours",
								text: "a completely private pool",
							},
						] as const
					).map((fact) => (
						<div key={fact.icon}>
							<Icon name={fact.icon} />
							<div>
								<strong>{fact.value}</strong>
								<span>{fact.text}</span>
							</div>
						</div>
					))}
				</div>

				<section
					id="experience"
					className={`${styles.experience} ${styles.section}`}
				>
					<div className={styles.sectionHeading} data-reveal>
						<div>
							<p className={styles.eyebrow}>THE ART OF DOING LESS</p>
							<h2>
								Beautifully simple.
								<br />
								<em>Entirely yours.</em>
							</h2>
						</div>
						<p>
							The best days don’t need a plan.
							<br />
							Just a place that makes room for them.
						</p>
					</div>
					<div className={styles.experienceGrid}>
						{[
							{
								id: 1,
								number: "01",
								title: "Your daily dose of blue",
								text: "A refreshing first dip. A book by the water. A sun terrace that becomes your favourite spot.",
							},
							{
								id: 21,
								number: "02",
								title: "Long lunches. Longer evenings.",
								text: "An outdoor kitchen, a barbecue, and a table made for one more story. This is life, al fresco.",
							},
							{
								id: 27,
								number: "03",
								title: "Room to feel at home",
								text: "Light-filled living, a fully equipped kitchen and quiet bedrooms. Thoughtfully made for time together.",
							},
						].map((item, i) => (
							<article
								className={styles.experienceItem}
								key={item.id}
								data-reveal
							>
								<button
									onClick={() =>
										openPhoto(photos.findIndex((p) => p.id === item.id))
									}
									aria-label={`View ${item.title}`}
								>
									<Photo id={item.id} alt={item.title} />
									<span className={styles.photoArrow}>
										<Icon name="diagonal" />
									</span>
								</button>
								<div className={styles.experienceTitle}>
									<span>{item.number}</span>
									<h3>{item.title}</h3>
								</div>
								<p>{item.text}</p>
								<span className={styles.experienceIndex}>
									VILLA MAREX / {String(i + 1).padStart(2, "0")}
								</span>
							</article>
						))}
					</div>
					<div className={styles.amenities} data-reveal>
						<span>THE LITTLE THINGS, TAKEN CARE OF.</span>
						{(
							[
								{ icon: "wifi", text: "Wi-Fi" },
								{ icon: "snow", text: "Air conditioning" },
								{ icon: "car", text: "Private parking" },
								{ icon: "kitchen", text: "Outdoor kitchen" },
								{ icon: "leaf", text: "Enclosed garden" },
							] as const
						).map((item) => (
							<div key={item.icon}>
								<Icon name={item.icon} />
								<span>{item.text}</span>
							</div>
						))}
					</div>
				</section>

				<section
					className={styles.dayNight}
					aria-label="Villa Marex by day and night"
				>
					<Photo
						id={1}
						alt="Sunshine over the villa's private pool"
						className={`${styles.dayNightImage} ${!daytime ? styles.hiddenImage : ""}`}
					/>
					<Photo
						id={31}
						alt="The pool and villa illuminated on a peaceful Istrian evening"
						className={`${styles.dayNightImage} ${daytime ? styles.hiddenImage : ""}`}
					/>
					<div className={styles.dayNightShade} />
					<div className={styles.dayNightCopy}>
						<p className={styles.eyebrow}>FROM FIRST LIGHT TO LAST DIP</p>
						<h2>
							{daytime ? (
								<>
									Sun on your skin.
									<br />
									<em>Nothing on your mind.</em>
								</>
							) : (
								<>
									When the day fades,
									<br />
									<em>the magic stays.</em>
								</>
							)}
						</h2>
					</div>
					<div
						className={styles.dayNightToggle}
						role="group"
						aria-label="View villa by time of day"
					>
						<button
							aria-pressed={daytime}
							className={daytime ? styles.activeTime : ""}
							onClick={() => setDaytime(true)}
						>
							<Icon name="sun" /> By day
						</button>
						<button
							aria-pressed={!daytime}
							className={!daytime ? styles.activeTime : ""}
							onClick={() => setDaytime(false)}
						>
							<span>☾</span> By night
						</button>
					</div>
				</section>

				<section id="gallery" className={`${styles.gallery} ${styles.section}`}>
					<div className={styles.sectionHeading} data-reveal>
						<div>
							<p className={styles.eyebrow}>A CLOSER LOOK</p>
							<h2>
								Picture yourself <em>here.</em>
							</h2>
						</div>
						<span className={styles.photoCount}>
							THE VILLA, THROUGH OUR LENS
						</span>
					</div>
					<div
						className={styles.galleryTabs}
						role="group"
						aria-label="Filter villa photographs"
					>
						{["All moments", "Outdoors", "Interiors", "After dark"].map(
							(tab) => (
								<button
									key={tab}
									className={filter === tab ? styles.activeTab : ""}
									aria-pressed={filter === tab}
									onClick={() => {
										setFilter(tab);
										setShowAll(false);
									}}
								>
									{tab}
									{filter === tab && (
										<span>{filtered.length.toString().padStart(2, "0")}</span>
									)}
								</button>
							),
						)}
					</div>
					<div className={styles.galleryGrid}>
						{visiblePhotos.map((photo) => (
							<button
								key={photo.id}
								className={styles.galleryPhoto}
								onClick={() => openPhoto(photos.indexOf(photo), filtered)}
							>
								<Photo id={photo.id} alt={photo.title} />
								<span>
									{photo.title}
									<Icon name="diagonal" />
								</span>
							</button>
						))}
					</div>
					{filtered.length > 6 && (
						<button
							className={styles.outlineButton}
							onClick={() => setShowAll(!showAll)}
						>
							<Icon name="grid" />
							{showAll
								? "A little less"
								: `See all ${filtered.length} photographs`}{" "}
							<Icon name="arrow" />
						</button>
					)}
				</section>

				<section id="location" className={styles.location}>
					<div
						className={styles.locationMap}
						aria-label="Villa Marex in Pavićini on the Istrian peninsula"
					>
						<span className={styles.mapSea}>ADRIATIC SEA</span>
						<svg viewBox="0 0 600 650" fill="none" aria-hidden="true">
							<path
								d="M40-30 615-30 615 700 440 700 455 605 382 573 369 525 318 496 282 455 253 438 228 380 195 342 170 292 141 258 155 201 112 171 98 123 55 86Z"
								fill="#d7d8b9"
							/>
							<path
								d="m199 40 62 81 44 67-8 71 44 63-5 59 33 54 39 50 36 76"
								stroke="#b9bd9b"
								strokeWidth="3"
								strokeDasharray="4 7"
							/>
							<path
								d="m141 258 77-8 79 9m-69 121 108 1 92-26m-59 170 99-19"
								stroke="#c0c3a4"
								strokeWidth="2"
							/>
							<path
								d="m154 199 55-48 96 37 66-66 86 17m-262 203 95-19 51-1 111-65M282 455l87-20 80 26"
								stroke="#bec3a0"
								strokeWidth="1.5"
							/>
							<circle cx="244" cy="270" r="3" fill="#6b7156" />
							<circle cx="313" cy="475" r="3" fill="#6b7156" />
						</svg>
						<span className={styles.mapIstria}>I S T R I A</span>
						<span className={styles.mapRovinj}>Rovinj</span>
						<span className={styles.mapPula}>Pula</span>
						<div className={styles.mapVilla}>
							<span>
								<Icon name="sun" />
							</span>
							<div>
								Villa Marex<small>PAVIĆINI</small>
							</div>
						</div>
						<span className={styles.mapNorth}>
							N<br />↑
						</span>
						<span className={styles.mapCaption}>
							A little off the beaten path.
							<br />
							Exactly where you want to be.
						</span>
					</div>
					<div className={styles.locationCopy} data-reveal>
						<p className={styles.eyebrow}>QUIETLY CONNECTED</p>
						<h2>
							A world away.
							<br />
							<em>Close to it all.</em>
						</h2>
						<p>
							The quiet side of Istria, with the Adriatic just a short drive
							away. Spend a morning finding your favourite cove, wander through
							Pula’s historic streets, or follow your appetite to a local
							konoba.
						</p>
						<p>Then come home to your own little sanctuary.</p>
						<div className={styles.locationDetails}>
							<div>
								<Icon name="pin" />
								<span>
									Pavićini 38a<small>52208 Pavićini, Istria, Croatia</small>
								</span>
							</div>
							<div>
								<Icon name="sun" />
								<span>
									Beach days, your way
									<small>Discover the nearby coast of Duga Uvala</small>
								</span>
							</div>
						</div>
						<a
							href={mapsUrl}
							target="_blank"
							rel="noreferrer"
							className={styles.underlinedLink}
						>
							Find us on the map <Icon name="diagonal" />
						</a>
					</div>
				</section>

				<section className={`${styles.faq} ${styles.section}`}>
					<div data-reveal>
						<p className={styles.eyebrow}>BEFORE YOU ARRIVE</p>
						<h2>
							A few things
							<br />
							<em>to know.</em>
						</h2>
					</div>
					<div className={styles.faqList} data-reveal>
						{[
							[
								"How many people can stay?",
								"Villa Marex welcomes up to eight guests. There are three bedrooms: two with a king bed and one with two single beds, plus two sofa beds in the living area.",
							],
							[
								"Is the pool completely private?",
								"Yes. The outdoor pool, sun terrace and enclosed garden are for your group alone throughout your stay.",
							],
							[
								"What are the check-in and check-out times?",
								"Check-in is from 16:00 and check-out is by 10:00. Confirm arrival arrangements with your host through your booking platform.",
							],
							[
								"Is the villa suitable for families?",
								"Families and children are welcome. There is an enclosed garden, space to spend time together, and a fully equipped kitchen. Children should always be supervised around the pool.",
							],
							[
								"How can I book my stay?",
								"Choose your dates and guests, then continue to the villa’s Booking.com or Airbnb listing for live availability, the final price and booking terms. This website is a frontend demonstration and does not take reservations.",
							],
						].map(([question, answer]) => (
							<details key={question}>
								<summary>
									{question}
									<span>+</span>
								</summary>
								<p>{answer}</p>
							</details>
						))}
					</div>
				</section>

				<section className={styles.finalCta}>
					<Icon name="sun" />
					<p className={styles.eyebrow}>GOOD DAYS START HERE</p>
					<h2>
						Your next chapter,
						<br />
						<em>a little slower.</em>
					</h2>
					<button
						className={styles.primaryButton}
						onClick={() => setStayOpen(true)}
					>
						Let’s make it a summer <Icon name="diagonal" />
					</button>
					<p>A private villa. Your favourite people. Istria.</p>
				</section>
			</main>
			<footer className={styles.footer}>
				<div>
					<a href="#" className={styles.brand}>
						<Icon name="sun" />
						<span>
							VILLA MAREX<small>YOUR ISTRIAN ESCAPE</small>
						</span>
					</a>
					<p>
						A place to slow down.
						<br />A place to come back to.
					</p>
				</div>
				<div className={styles.footerLinks}>
					<a href="#the-villa">The villa</a>
					<a href="#gallery">Gallery</a>
					<a href="#location">Location</a>
					<button onClick={() => setStayOpen(true)}>
						Plan your stay <Icon name="diagonal" />
					</button>
				</div>
				<div className={styles.footerBottom}>
					<span>© {2026} Villa Marex · Pavićini, Croatia</span>
					<span>Website concept · No reservations are taken here.</span>
					<a href={airbnbBase} target="_blank" rel="noreferrer">
						Airbnb <Icon name="diagonal" />
					</a>
					<a href={bookingBase} target="_blank" rel="noreferrer">
						Booking.com <Icon name="diagonal" />
					</a>
				</div>
			</footer>

			{calendar && (
				<Modal onClose={closeCalendar} label="Choose your travel dates">
					<div className={styles.calendar}>
						<p className={styles.eyebrow}>MAKE TIME FOR YOURSELF</p>
						<h2>
							When shall we <em>escape?</em>
						</h2>
						<p>Select your arrival, then your departure.</p>
						<div className={styles.calendarMonth}>
							<button
								aria-label="Previous month"
								disabled={
									month <=
									new Date(new Date().getFullYear(), new Date().getMonth(), 1)
								}
								onClick={() =>
									setMonth(
										new Date(month.getFullYear(), month.getMonth() - 1, 1),
									)
								}
							>
								<Icon name="chevron" />
							</button>
							<strong>
								{month.toLocaleDateString("en-GB", {
									month: "long",
									year: "numeric",
								})}
							</strong>
							<button
								aria-label="Next month"
								onClick={() =>
									setMonth(
										new Date(month.getFullYear(), month.getMonth() + 1, 1),
									)
								}
							>
								<Icon name="chevron" />
							</button>
						</div>
						<div className={styles.calendarGrid}>
							{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
								<span className={styles.weekday} key={day}>
									{day}
								</span>
							))}
							{Array.from({ length: (month.getDay() + 6) % 7 }, (_, i) => (
								<span key={`empty-${i}`} />
							))}
							{Array.from(
								{
									length: new Date(
										month.getFullYear(),
										month.getMonth() + 1,
										0,
									).getDate(),
								},
								(_, i) => {
									const value = dateKey(
										new Date(month.getFullYear(), month.getMonth(), i + 1),
									);
									return (
										<button
											key={value}
											disabled={value < dateKey(new Date())}
											aria-label={dateLabel(value)}
											aria-pressed={arrival === value || departure === value}
											className={`${arrival === value || departure === value ? styles.selectedDate : ""} ${arrival && departure && value > arrival && value < departure ? styles.inRange : ""}`}
											onClick={() => selectDate(value)}
										>
											{i + 1}
										</button>
									);
								},
							)}
						</div>
						<div className={styles.dateSummary}>
							<span>
								CHECK IN<strong>{dateLabel(arrival)}</strong>
							</span>
							<Icon name="arrow" />
							<span>
								CHECK OUT<strong>{dateLabel(departure)}</strong>
							</span>
						</div>
						<div className={styles.calendarActions}>
							<button
								className={styles.textButton}
								onClick={() => {
									setArrival("");
									setDeparture("");
								}}
							>
								Clear dates
							</button>
							<button
								className={styles.primaryButton}
								disabled={!arrival || !departure}
								onClick={closeCalendar}
							>
								Save dates <Icon name="arrow" />
							</button>
						</div>
						<small className={styles.demoNote}>
							Date selection only. Live availability is shown on the booking
							platform.
						</small>
					</div>
				</Modal>
			)}

			{stayOpen && (
				<Modal
					onClose={() => setStayOpen(false)}
					label="Plan your stay at Villa Marex"
				>
					<div className={styles.stayModalPhoto}>
						<Photo id={24} alt="Villa Marex illuminated at dusk" />
					</div>
					<div className={styles.stayModalContent}>
						<p className={styles.eyebrow}>YOUR ISTRIAN ESCAPE</p>
						<h2>
							A stay to <em>look forward to.</em>
						</h2>
						<p>Your villa, your pool, your kind of summer.</p>
						<button
							className={styles.modalDates}
							onClick={() => {
								setReturnToStay(true);
								setStayOpen(false);
								setCalendar(true);
							}}
						>
							<span>
								YOUR DATES
								<strong>
									{arrival && departure
										? `${dateLabel(arrival)} — ${dateLabel(departure)}`
										: "Choose your dates"}
									{nights > 0 && <small>{nights} nights of slowing down</small>}
								</strong>
							</span>
							<Icon name="diagonal" />
						</button>
						<div className={styles.modalGuests}>
							<div>
								<span>YOUR PEOPLE</span>
								<strong>{guests} guests</strong>
							</div>
							<div className={styles.stepper}>
								<button
									aria-label="Remove one guest"
									disabled={guests <= 1}
									onClick={() => setGuests(guests - 1)}
								>
									−
								</button>
								<span aria-live="polite">{guests}</span>
								<button
									aria-label="Add one guest"
									disabled={guests >= 8}
									onClick={() => setGuests(guests + 1)}
								>
									+
								</button>
							</div>
						</div>
						<p className={styles.bookingNote}>
							Continue to your preferred platform for live availability, prices
							and reservation details.
						</p>
						<a
							className={styles.primaryButton}
							href={bookingUrl.toString()}
							target="_blank"
							rel="noreferrer"
						>
							Explore on Booking.com <Icon name="diagonal" />
						</a>
						<a
							className={styles.outlineButton}
							href={airbnbUrl.toString()}
							target="_blank"
							rel="noreferrer"
						>
							Explore on Airbnb <Icon name="diagonal" />
						</a>
						<small className={styles.demoNote}>
							Frontend demo · No payment or reservation is made here.
						</small>
					</div>
				</Modal>
			)}

			{lightbox !== null && (
				<Modal
					onClose={() => setLightbox(null)}
					label="Villa Marex photo gallery"
					wide
				>
					<div className={styles.lightbox}>
						<Photo
							key={photos[lightbox].id}
							id={photos[lightbox].id}
							alt={photos[lightbox].title}
							eager
						/>
						<div className={styles.lightboxCaption}>
							<div>
								<span>{photos[lightbox].category}</span>
								<h2>{photos[lightbox].title}</h2>
							</div>
							<span>
								{String(lightboxItems.indexOf(lightbox) + 1).padStart(2, "0")} /{" "}
								{lightboxItems.length}
							</span>
							<div>
								<button
									aria-label="Previous photo"
									onClick={() => advancePhoto(-1)}
								>
									<Icon name="arrow" />
								</button>
								<button aria-label="Next photo" onClick={() => advancePhoto(1)}>
									<Icon name="arrow" />
								</button>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
}
