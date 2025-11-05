import React, { useMemo, useState } from 'react';
import { Play, Send, CheckCircle2 } from 'lucide-react';

const learners = [
  { id: 'user-1001', name: 'Jordan Lee' },
  { id: 'user-1002', name: 'Avery Kim' },
];

const activities = [
  { id: 'c-ethics-101', name: 'Ethics Fundamentals' },
  { id: 'c-privacy-gdpr', name: 'Data Privacy & GDPR' },
  { id: 'c-anti-bribery', name: 'Anti-Bribery & Corruption' },
];

const verbs = [
  { id: 'http://adlnet.gov/expapi/verbs/launched', display: 'launched' },
  { id: 'http://adlnet.gov/expapi/verbs/completed', display: 'completed' },
  { id: 'http://adlnet.gov/expapi/verbs/passed', display: 'passed' },
  { id: 'http://adlnet.gov/expapi/verbs/failed', display: 'failed' },
];

function buildStatement(actor, verb, activity, score) {
  const now = new Date().toISOString();
  const statement = {
    actor: {
      objectType: 'Agent',
      name: actor.name,
      account: { name: actor.id, homePage: 'https://ethicslearn.example' },
    },
    verb: { id: verb.id, display: { 'en-US': verb.display } },
    object: {
      id: `https://ethicslearn.example/activity/${activity.id}`,
      definition: { name: { 'en-US': activity.name }, type: 'http://adlnet.gov/expapi/activities/module' },
      objectType: 'Activity',
    },
    result: score != null ? { score: { scaled: score / 100 }, completion: score >= 100, success: score >= 70 } : undefined,
    timestamp: now,
  };
  return statement;
}

const XAPISimulator = () => {
  const [actorId, setActorId] = useState(learners[0].id);
  const [activityId, setActivityId] = useState(activities[0].id);
  const [verbId, setVerbId] = useState(verbs[0].id);
  const [score, setScore] = useState(92);
  const [lastStatement, setLastStatement] = useState(null);
  const [sent, setSent] = useState(false);

  const actor = useMemo(() => learners.find(l => l.id === actorId), [actorId]);
  const activity = useMemo(() => activities.find(a => a.id === activityId), [activityId]);
  const verb = useMemo(() => verbs.find(v => v.id === verbId), [verbId]);

  const handleRecord = () => {
    const st = buildStatement(actor, verb, activity, ['passed','failed','completed'].includes(verb.display) ? score : undefined);
    setLastStatement(st);
    setSent(true);
    // This demo does not call a backend. In a full app, send `st` to your LRS endpoint.
    // Example (when backend is available):
    // await fetch(`${import.meta.env.VITE_BACKEND_URL}/xapi/statements`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(st) })
  };

  return (
    <section id="activity" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#2C2C2C] flex items-center gap-2"><Play/> xAPI Activity Simulator</h2>
          {sent && (
            <span className="inline-flex items-center gap-1 text-xs text-[#001BB7] bg-white border border-black/5 px-2 py-1 rounded-md"><CheckCircle2 size={16}/> Recorded</span>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-black/5 p-4 shadow-sm">
            <label className="text-xs text-[#2C2C2C]/70">Learner</label>
            <select value={actorId} onChange={(e) => setActorId(e.target.value)} className="mt-1 w-full text-sm border border-black/10 rounded-md px-3 py-2 bg-[#F5F1DC] focus:outline-none focus:ring-2 focus:ring-[#0046FF]">
              {learners.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>

            <label className="mt-4 block text-xs text-[#2C2C2C]/70">Activity</label>
            <select value={activityId} onChange={(e) => setActivityId(e.target.value)} className="mt-1 w-full text-sm border border-black/10 rounded-md px-3 py-2 bg-[#F5F1DC] focus:outline-none focus:ring-2 focus:ring-[#0046FF]">
              {activities.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
            </select>

            <label className="mt-4 block text-xs text-[#2C2C2C]/70">Verb</label>
            <select value={verbId} onChange={(e) => setVerbId(e.target.value)} className="mt-1 w-full text-sm border border-black/10 rounded-md px-3 py-2 bg-[#F5F1DC] focus:outline-none focus:ring-2 focus:ring-[#0046FF]">
              {verbs.map(v => <option key={v.id} value={v.id}>{v.display}</option>)}
            </select>

            <label className="mt-4 block text-xs text-[#2C2C2C]/70">Score</label>
            <input type="number" min={0} max={100} value={score} onChange={(e) => setScore(Number(e.target.value))} className="mt-1 w-full text-sm border border-black/10 rounded-md px-3 py-2 bg-[#F5F1DC] focus:outline-none focus:ring-2 focus:ring-[#0046FF]" />

            <button onClick={handleRecord} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-[#FF8040] text-white hover:opacity-90 transition-colors">
              <Send size={16}/> Record Activity
            </button>
          </div>

          <div className="md:col-span-2 bg-white rounded-xl border border-black/5 p-4 shadow-sm">
            <p className="text-xs text-[#2C2C2C]/70">Statement Preview</p>
            <pre className="mt-2 text-xs bg-[#F5F1DC] rounded-md p-3 overflow-auto max-h-64 text-[#2C2C2C]">
{lastStatement ? JSON.stringify(lastStatement, null, 2) : '{\n  "actor": { ... },\n  "verb": { ... },\n  "object": { ... }\n}'}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XAPISimulator;
