// ثانوية بلس - Thanaweya Plus
const state = {
  year: '3',
  track: 'علمي علوم',
  region: 'الكل',
  subject: 'الكل',
  sort: 'rating'
};

const el = (id) => document.getElementById(id);

async function fetchJSON(url){
  const r = await fetch(url);
  return r.json();
}

function trackOptionsForYear(year){
  if(year === '1') return ['عام'];
  if(year === '2') return ['علمي', 'أدبي'];
  return ['علمي علوم', 'علمي رياضة', 'أدبي'];
}

function updateTrackSelect(year){
  const sel = el('trackSelect');
  const opts = trackOptionsForYear(year);
  sel.innerHTML = opts.map(o => `<option value="${o}">${o}</option>`).join('');
  // keep current if possible
  if(opts.includes(state.track)){
    sel.value = state.track;
  } else {
    state.track = opts[0];
    sel.value = state.track;
  }
  updateTrackLabel();
}

function updateTrackLabel(){
  const yearNames = {'1':'أولى ثانوي','2':'تانية ثانوي','3':'تالتة ثانوي'};
  el('currentTrackLabel').textContent = `${state.track} - ${yearNames[state.year] || ''}`;
}

async function loadRegions(){
  const regions = await fetchJSON('/api/regions');
  const sel = el('regionSelect');
  sel.innerHTML = regions.map(r => `<option value="${r}">${r}</option>`).join('');
  sel.value = state.region;
}

async function loadSubjects(){
  const subjects = await fetchJSON(`/api/subjects?year=${state.year}&track=${encodeURIComponent(state.track)}`);
  const sel = el('subjectSelect');
  sel.innerHTML = `<option value="الكل">كل المواد</option>` + subjects.map(s=>`<option value="${s}">${s}</option>`).join('');
  // chips
  const chips = el('subjectChips');
  chips.innerHTML = `<button class="tag ${state.subject==='الكل'?'active':''}" data-sub="الكل">الكل</button>` +
    subjects.map(s=>`<button class="tag ${state.subject===s?'active':''}" data-sub="${s}">${s}</button>`).join('');
  chips.querySelectorAll('.tag').forEach(b=>{
    b.onclick = ()=>{
      state.subject = b.dataset.sub;
      el('subjectSelect').value = state.subject;
      // update active
      chips.querySelectorAll('.tag').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      search();
    }
  });
  // keep selection if still valid
  if(subjects.includes(state.subject) || state.subject==='الكل'){
    sel.value = state.subject;
  } else {
    state.subject = 'الكل';
    sel.value = 'الكل';
  }
}

function teacherCard(t){
  const regions = t.regions.slice(0,2).join(' • ');
  const videosHtml = t.videos.map(v=>`
    <div class="v-item" onclick="openVideo('${v.youtube_id}','${escapeHtml(v.title)}','${t.name}')">
      <div class="v-thumb">
        <img src="https://img.youtube.com/vi/${v.youtube_id}/mqdefault.jpg" alt="" loading="lazy" onerror="this.style.display='none'">
        ▶
        <span>${v.duration}</span>
      </div>
      <div class="v-info">
        <p class="v-title">${v.title}</p>
        <div class="v-meta">${v.views} مشاهدة <span class="free-pill">مجاني</span></div>
      </div>
    </div>
  `).join('');

  return `
  <article class="teacher-card">
    <div class="t-head">
      <img class="avatar" src="${t.photo}" alt="${t.name}" loading="lazy">
      <div class="t-meta">
        <h4>${t.name}</h4>
        <div class="subject">${t.subject}</div>
        <div class="rating-line">
          <span class="stars">★★★★★</span>
          <span>${t.rating} / 5</span>
          • <span>${t.students.toLocaleString('ar-EG')} طالب</span>
          <span class="badge-exp">${t.experience} سنة خبرة</span>
        </div>
      </div>
    </div>
    <div class="t-body">
      <p class="bio">${t.bio}</p>
      <div class="tags">
        ${t.tags.map(tag=>`<span class="mini-tag">#${tag}</span>`).join('')}
      </div>
      <div class="pill-row">
        <span class="pill">🎯 ${t.years.map(y=>y==='1'?'1ث':y==='2'?'2ث':'3ث').join(' / ')}</span>
        <span class="pill">📚 ${t.tracks.slice(0,2).join('، ')}</span>
      </div>
    </div>
    <div class="t-foot">
      <span class="price">${t.price}</span>
      <span class="regions">📍 ${regions}</span>
    </div>
    <div class="video-list">
      ${videosHtml}
    </div>
    <button class="btn-watch" onclick="openTeacher(${t.id})">شاهد كل فيديوهات ${t.name.split(' ').slice(0,2).join(' ')}</button>
  </article>`;
}

function escapeHtml(s){
  return s.replace(/'/g, "&#39;").replace(/"/g,'&quot;');
}

async function search(){
  updateTrackLabel();
  const grid = el('teachersGrid');
  grid.innerHTML = `<div class="loading">جاري البحث...</div>`;

  const params = new URLSearchParams({
    year: state.year,
    track: state.track,
    region: state.region,
    subject: state.subject
  });
  const data = await fetchJSON(`/api/teachers?${params.toString()}`);
  let teachers = data.teachers || [];

  // sort client-side
  if(state.sort === 'students'){
    teachers.sort((a,b)=> b.students - a.students);
  } else {
    teachers.sort((a,b)=> b.rating - a.rating);
  }

  el('resultCount').textContent = teachers.length ? `وجدنا ${teachers.length} مدرس مميز` : 'لا يوجد نتائج';

  if(!teachers.length){
    grid.innerHTML = `<div class="empty">مفيش مدرسين بالفلترة دي حالياً<br>جرب تغير المنطقة لـ "أونلاين - كل المحافظات" أو "الكل"</div>`;
    return;
  }

  grid.innerHTML = teachers.map(teacherCard).join('');
  // smooth scroll
  document.getElementById('teachers').scrollIntoView({behavior:'smooth', block:'start'});
}

async function openTeacher(id){
  const t = await fetchJSON(`/api/teacher/${id}`);
  if(!t.id) return;
  const first = t.videos?.[0];
  if(first) openVideo(first.youtube_id, first.title, t.name);
}

// video modal
function openVideo(youtube_id, title, teacher){
  const modal = el('videoModal');
  el('modalContent').innerHTML = `
    <div class="video-wrap">
      <iframe src="https://www.youtube.com/embed/${youtube_id}?autoplay=1&rel=0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
    <div class="modal-info">
      <h4>${title}</h4>
      <p>${teacher || ''} • ثانوية بلس - مجاني بالكامل</p>
    </div>`;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeVideo(){
  el('videoModal').classList.add('hidden');
  el('modalContent').innerHTML = '';
  document.body.style.overflow = '';
}
window.openVideo = openVideo;
window.openTeacher = openTeacher;

// init
document.addEventListener('DOMContentLoaded', async ()=>{
  // year segmented
  document.querySelectorAll('#yearSeg button').forEach(btn=>{
    btn.onclick = async ()=>{
      document.querySelectorAll('#yearSeg button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      state.year = btn.dataset.year;
      updateTrackSelect(state.year);
      await loadSubjects();
      search();
    }
  });

  el('trackSelect').addEventListener('change', async (e)=>{
    state.track = e.target.value;
    await loadSubjects();
    search();
  });
  el('regionSelect').addEventListener('change', e=>{
    state.region = e.target.value;
    search();
  });
  el('subjectSelect').addEventListener('change', e=>{
    state.subject = e.target.value;
    // sync chips
    document.querySelectorAll('#subjectChips .tag').forEach(c=>{
      c.classList.toggle('active', c.dataset.sub === state.subject);
    });
    search();
  });

  el('searchBtn').onclick = search;

  // sort
  document.querySelectorAll('.chip[data-sort]').forEach(ch=>{
    ch.onclick = ()=>{
      document.querySelectorAll('.chip[data-sort]').forEach(c=>c.classList.remove('active'));
      ch.classList.add('active');
      state.sort = ch.dataset.sort;
      search();
    }
  });

  // modal close
  el('modalClose').onclick = closeVideo;
  el('modalBackdrop').onclick = closeVideo;
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeVideo(); });

  // initial load
  await loadRegions();
  updateTrackSelect(state.year);
  await loadSubjects();
  await search();
});
س