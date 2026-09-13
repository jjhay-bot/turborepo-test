"use client";

import { useState } from "react";
import Link from "next/link";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import CallRounded from "@mui/icons-material/CallRounded";
import ChatBubbleRounded from "@mui/icons-material/ChatBubbleRounded";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import HomeRounded from "@mui/icons-material/HomeRounded";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import RestartAltRounded from "@mui/icons-material/RestartAltRounded";
import SearchRounded from "@mui/icons-material/SearchRounded";
import SendRounded from "@mui/icons-material/SendRounded";
import StarRounded from "@mui/icons-material/StarRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

type Screen = "discover" | "results" | "profile" | "chat" | "complete" | "rating" | "success";
type Message = { id: number; from: "customer" | "merchant"; text: string };

const merchants = [
  { name: "Kuya Ben Home Repair", icon: "🔧", area: "Abar 2nd", distance: "1.8 km", rating: "4.8", jobs: 23, reply: "Replies in ~10 min" },
  { name: "JM Plumbing Services", icon: "🛠️", area: "Caanawan", distance: "3.2 km", rating: "4.6", jobs: 11, reply: "Available today" },
  { name: "Mang Lito Repair", icon: "🚰", area: "Kaliwanagan", distance: "4.1 km", rating: "4.9", jobs: 8, reply: "Available after 3 PM" },
];

const initialMessages: Message[] = [
  { id: 1, from: "customer", text: "Hello po, available kayo today? Tumutulo po faucet namin." },
  { id: 2, from: "merchant", text: "Available po after 2 PM. Saang barangay po?" },
  { id: 3, from: "customer", text: "Abar 1st po. How much estimated?" },
  { id: 4, from: "merchant", text: "Around ₱250 labor, depende po if may papalitan na part." },
];

const green = "#176b48";
const ink = "#17251f";
const soft = "#eaf4ee";

export default function HanapDitoPrototypePage() {
  const [screen, setScreen] = useState<Screen>("discover");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Open now");
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const [rating, setRating] = useState(5);
  const [ratingTags, setRatingTags] = useState(["Fast response", "Accurate listing"]);

  const reset = () => {
    setScreen("discover"); setQuery(""); setFilter("Open now");
    setMessages(initialMessages); setDraft(""); setRating(5);
    setRatingTags(["Fast response", "Accurate listing"]);
  };
  const search = () => { if (!query.trim()) setQuery("Plumber"); setScreen("results"); };
  const send = () => {
    if (!draft.trim()) return;
    setMessages((current) => [...current, { id: Date.now(), from: "customer", text: draft.trim() }]);
    setDraft("");
  };
  const toggleTag = (tag: string) => setRatingTags((tags) => tags.includes(tag) ? tags.filter((item) => item !== tag) : [...tags, tag]);

  const header = (title?: string, back?: Screen) => (
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ minHeight: 64, px: 2, bgcolor: "white", borderBottom: "1px solid #e2e8e3" }}>
      {back ? <IconButton aria-label="Go back" onClick={() => setScreen(back)}><ArrowBackRounded /></IconButton> : <Typography fontWeight={900} fontSize={20}>hanap<Box component="span" sx={{ color: green }}>dito</Box></Typography>}
      {title && <Typography fontWeight={800}>{title}</Typography>}
      <IconButton aria-label="Restart prototype" onClick={reset}><RestartAltRounded /></IconButton>
    </Stack>
  );

  const merchantCard = (merchant: typeof merchants[number], primary = false) => (
    <Paper key={merchant.name} variant="outlined" sx={{ p: 1.5, borderRadius: 3 }}>
      <Stack direction="row" spacing={1.5} onClick={() => primary && setScreen("profile")} sx={{ cursor: primary ? "pointer" : "default" }}>
        <Box sx={{ width: 72, minHeight: 72, borderRadius: 2.5, bgcolor: "#dcecd8", display: "grid", placeItems: "center", fontSize: 32 }}>{merchant.icon}</Box>
        <Box flex={1}><Typography fontWeight={850}>{merchant.name}</Typography><Typography variant="caption" color="text.secondary">{merchant.distance} · {merchant.area}</Typography><br/><Chip size="small" label={merchant.reply} sx={{ mt: .6, height: 23, bgcolor: soft, color: green, fontWeight: 700 }} /><Typography variant="caption" display="block" sx={{ mt: .5 }}>★ {merchant.rating} · {merchant.jobs} confirmed jobs</Typography></Box>
      </Stack>
      {primary && <Stack direction="row" spacing={1} mt={1.3}><Button fullWidth variant="outlined" startIcon={<CallRounded />} onClick={() => window.alert("Prototype: this would open the phone dialer.")}>Call</Button><Button fullWidth variant="contained" startIcon={<ChatBubbleRounded />} onClick={() => setScreen("chat")}>Inquire</Button></Stack>}
    </Paper>
  );

  return (
    <Box sx={{ minHeight: "100dvh", bgcolor: "#e9efe9", py: { xs: 0, sm: 3 } }}>
      <Paper elevation={6} sx={{ width: "100%", maxWidth: 430, minHeight: { xs: "100dvh", sm: 820 }, mx: "auto", overflow: "hidden", position: "relative", borderRadius: { xs: 0, sm: 5 }, bgcolor: "#f7f9f6" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2, py: .75, bgcolor: ink, color: "white" }}><Typography variant="caption" fontWeight={800}>INTERACTIVE MVP PROTOTYPE</Typography><Typography component={Link} href="/hanapdito-mvp" variant="caption" sx={{ color: "#dff36d", textDecoration: "none", fontWeight: 800 }}>View concept</Typography></Stack>

        {screen === "discover" && <Box>{header()}<Stack spacing={2.2} sx={{ p: 2.5 }}><Box><Typography variant="overline" sx={{ color: green, fontWeight: 800 }}>SAN JOSE CITY</Typography><Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: "-.04em", lineHeight: 1.05, mt: .5 }}>What do you need nearby?</Typography><Typography color="text.secondary" mt={1}>Find local sellers and services available today.</Typography></Box><TextField autoFocus value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && search()} placeholder="Try ‘plumber’ or ‘cake tomorrow’" InputProps={{ startAdornment: <SearchRounded sx={{ mr: 1, color: "text.secondary" }} />, endAdornment: <Button variant="contained" onClick={search}>Search</Button> }} /><Stack direction="row" alignItems="center" spacing={.5}><LocationOnRounded sx={{ color: green }} /><Typography variant="body2">Abar 1st · <Box component="span" sx={{ color: green, fontWeight: 700 }}>Change</Box></Typography></Stack><Box><Typography fontWeight={850} mb={1}>Popular nearby</Typography><Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>{["Home repair", "Food", "Delivery", "Kids activities"].map((x) => <Chip key={x} label={x} onClick={() => { setQuery(x); setScreen("results"); }} />)}</Stack></Box><Box><Typography fontWeight={850} mb={1}>Available now</Typography>{merchantCard(merchants[0], true)}</Box></Stack></Box>}

        {screen === "results" && <Box>{header("Search results", "discover")}<Stack spacing={1.5} sx={{ p: 2 }}><TextField value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && search()} size="small" InputProps={{ startAdornment: <SearchRounded sx={{ mr: 1, color: "text.secondary" }} /> }} /><Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>{["Open now", "Nearest", "Top rated"].map((item) => <Chip key={item} label={item} variant={filter === item ? "filled" : "outlined"} onClick={() => setFilter(item)} sx={filter === item ? { bgcolor: ink, color: "white" } : {}} />)}</Stack><Typography fontWeight={850}>{merchants.length} nearby matches for “{query || "Plumber"}”</Typography>{merchants.map((merchant, index) => merchantCard(merchant, index === 0))}</Stack></Box>}

        {screen === "profile" && <Box>{header("Merchant", "results")}<Box sx={{ height: 170, bgcolor: "#dcecd8", display: "grid", placeItems: "center", fontSize: 70 }}>🔧</Box><Stack spacing={1.7} sx={{ p: 2.2, pb: 10 }}><Chip label="● Available today" sx={{ alignSelf: "flex-start", bgcolor: soft, color: green, fontWeight: 800 }} /><Box><Typography variant="h4" fontWeight={900}>Kuya Ben Home Repair</Typography><Typography color="text.secondary">Verified merchant · Abar 2nd</Typography><Typography mt={.5}>★ 4.8 · 23 confirmed jobs</Typography></Box><Stack direction="row" spacing={1}><Paper variant="outlined" sx={{ p: 1.2, flex: 1, borderRadius: 2.5 }}><b>~10 min</b><Typography variant="caption" display="block">Typical reply</Typography></Paper><Paper variant="outlined" sx={{ p: 1.2, flex: 1, borderRadius: 2.5 }}><b>Within 8 km</b><Typography variant="caption" display="block">Service area</Typography></Paper></Stack><Typography fontWeight={850}>Services</Typography>{[["Faucet repair", "From ₱250"], ["Leak inspection", "Ask price"], ["Basic electrical repair", "From ₱300"]].map(([service, price]) => <Stack key={service} direction="row" justifyContent="space-between" sx={{ py: 1, borderBottom: "1px solid #e2e8e3" }}><span>{service}</span><b>{price}</b></Stack>)}<Button size="large" variant="contained" startIcon={<ChatBubbleRounded />} onClick={() => setScreen("chat")}>Start an inquiry</Button></Stack></Box>}

        {screen === "chat" && <Box>{header("Kuya Ben", "profile")}<Box sx={{ p: 1.5, bgcolor: "#fff8d9", borderBottom: "1px solid #ead888" }}><Typography fontWeight={800}>Inquiry: Faucet repair</Typography><Typography variant="caption">In progress · In-app chat</Typography></Box><Stack spacing={1} sx={{ p: 1.5, pb: 18 }}>{messages.map((message) => <Box key={message.id} sx={{ alignSelf: message.from === "customer" ? "flex-end" : "flex-start", maxWidth: "82%", bgcolor: message.from === "customer" ? green : "white", color: message.from === "customer" ? "white" : ink, border: "1px solid #dfe6e0", borderRadius: 3, px: 1.5, py: 1 }}>{message.text}</Box>)}<Stack direction="row" spacing={.7} sx={{ overflowX: "auto", pt: 1 }}><Chip label="Share location" onClick={() => window.alert("Prototype: location shared.")} /><Chip label="Call" onClick={() => window.alert("Prototype: open dialer.")} /><Chip label="Messenger" onClick={() => window.alert("Prototype: inquiry remains recorded, then Messenger opens.")} /></Stack></Stack><Paper square sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 1.2 }}><Stack direction="row" spacing={1}><TextField fullWidth size="small" value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Write a message…" /><IconButton color="primary" onClick={send}><SendRounded /></IconButton></Stack><Button fullWidth sx={{ mt: 1 }} color="success" variant="outlined" onClick={() => setScreen("complete")}>Mark interaction done</Button></Paper></Box>}

        {screen === "complete" && <Box>{header("Confirm outcome", "chat")}<Stack alignItems="center" textAlign="center" spacing={2} sx={{ p: 3, pt: 8 }}><CheckCircleRounded sx={{ fontSize: 78, color: green }} /><Typography variant="overline" color="text.secondary">INTERACTION STATUS</Typography><Typography variant="h4" fontWeight={900}>Was the service completed?</Typography><Typography color="text.secondary">Confirm only after the merchant provided the agreed product or service.</Typography><Button fullWidth size="large" variant="contained" onClick={() => setScreen("rating")}>Yes, completed</Button><Button fullWidth variant="outlined" onClick={() => { window.alert("Inquiry cancelled. This reason would be recorded."); reset(); }}>No, cancel inquiry</Button><Typography variant="caption" color="text.secondary">Prototype assumption: merchant confirmation happens automatically.</Typography></Stack></Box>}

        {screen === "rating" && <Box>{header("Rate merchant", "complete")}<Stack alignItems="center" textAlign="center" spacing={2} sx={{ p: 3, pt: 5 }}><Typography variant="overline" sx={{ color: green, fontWeight: 800 }}>CONFIRMED INTERACTION</Typography><Typography variant="h4" fontWeight={900}>How was your experience?</Typography><Stack direction="row">{[1,2,3,4,5].map((star) => <IconButton key={star} onClick={() => setRating(star)}><StarRounded sx={{ fontSize: 38, color: star <= rating ? "#e7a623" : "#d9dedb" }} /></IconButton>)}</Stack><Stack direction="row" justifyContent="center" flexWrap="wrap" gap={1}>{["Fast response", "Accurate listing", "Fair price", "Friendly"].map((tag) => <Chip key={tag} label={tag} onClick={() => toggleTag(tag)} sx={ratingTags.includes(tag) ? { bgcolor: soft, color: green, fontWeight: 800 } : {}} />)}</Stack><TextField fullWidth multiline minRows={4} placeholder="Add a short comment (optional)" /><Button fullWidth size="large" variant="contained" onClick={() => setScreen("success")}>Submit review</Button></Stack></Box>}

        {screen === "success" && <Box>{header()}<Stack alignItems="center" textAlign="center" spacing={2} sx={{ p: 3, pt: 10 }}><Box sx={{ width: 88, height: 88, borderRadius: "50%", bgcolor: soft, display: "grid", placeItems: "center" }}><CheckCircleRounded sx={{ fontSize: 52, color: green }} /></Box><Typography variant="h4" fontWeight={900}>Thanks for helping your neighbors!</Typography><Typography color="text.secondary">Your {rating}-star review is now connected to this confirmed interaction.</Typography><Button fullWidth size="large" variant="contained" startIcon={<HomeRounded />} onClick={reset}>Back to discover</Button></Stack></Box>}
      </Paper>
    </Box>
  );
}
