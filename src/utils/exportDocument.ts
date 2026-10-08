import { Chapter } from '../types/textbook';
import { textbookChapters } from '../data/chaptersData';

export function exportToWordDocument(selectedChapter?: Chapter, allChapters = false): void {
  const chaptersToExport = allChapters ? textbookChapters : (selectedChapter ? [selectedChapter] : textbookChapters);
  const title = allChapters 
    ? 'Mon Manuel de Français - Grade 2 (Livre Complet)' 
    : `${selectedChapter?.frenchTitle ?? 'Chapitre'} - Mon Manuel de Français`;

  const htmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    body {
      font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
      font-size: 11pt;
      line-height: 1.5;
      color: #1e293b;
      margin: 20mm;
    }
    h1 {
      color: #1e3a8a;
      font-size: 20pt;
      border-bottom: 2pt solid #1e3a8a;
      padding-bottom: 6pt;
      margin-top: 24pt;
    }
    h2 {
      color: #0369a1;
      font-size: 14pt;
      margin-top: 16pt;
      border-left: 4pt solid #0284c7;
      padding-left: 8pt;
    }
    h3 {
      color: #334155;
      font-size: 12pt;
    }
    .badge {
      background-color: #f1f5f9;
      color: #475569;
      padding: 3pt 8pt;
      font-size: 9pt;
      font-weight: bold;
    }
    .teacher-note {
      background-color: #fefce8;
      border: 1pt dashed #ca8a04;
      padding: 10pt;
      margin: 12pt 0;
      font-style: italic;
    }
    .culture-box {
      background-color: #f0fdf4;
      border-left: 3pt solid #16a34a;
      padding: 8pt 12pt;
      margin: 10pt 0;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12pt 0;
    }
    th {
      background-color: #e0f2fe;
      color: #0369a1;
      border: 1pt solid #94a3b8;
      padding: 6pt 8pt;
      text-align: left;
      font-size: 10pt;
    }
    td {
      border: 1pt solid #cbd5e1;
      padding: 5pt 8pt;
      font-size: 10pt;
    }
    .dialogue-box {
      background-color: #f8fafc;
      border-left: 3pt solid #64748b;
      padding: 8pt 12pt;
      margin: 8pt 0;
    }
    .exercise-item {
      background-color: #ffffff;
      border: 1pt solid #e2e8f0;
      padding: 8pt 12pt;
      margin-bottom: 8pt;
    }
    .dotted-line {
      border-bottom: 1pt dotted #94a3b8;
      height: 18pt;
      margin-top: 6pt;
    }
    .answer-key {
      background-color: #faf5ff;
      border: 1pt solid #d8b4fe;
      padding: 10pt;
      margin-top: 14pt;
    }
    .page-break {
      page-break-after: always;
    }
  </style>
</head>
<body>
  <div style="text-align: center; margin-bottom: 30pt;">
    <h1 style="border: none; font-size: 26pt; color: #1e3a8a; margin-bottom: 4pt;">MON MANUEL DE FRANÇAIS</h1>
    <p style="font-size: 14pt; color: #475569; margin-top: 0;">Grade 2 / Cours Élémentaire 1 (CE1) — Cahier d'Activités & Leçons</p>
    <p style="font-size: 10pt; color: #64748b;">Nom de l'élève : _________________________________ &nbsp;&nbsp;&nbsp;&nbsp; Date : ______________</p>
  </div>

  ${chaptersToExport.map((chap) => `
    <div class="chapter-container">
      <div style="display: flex; justify-content: space-between; align-items: baseline;">
        <span class="badge">${chap.unitTag} · Page ${chap.pageNumber}</span>
      </div>
      <h1>${chap.frenchTitle}</h1>
      <p style="color: #64748b; font-style: italic;">${chap.englishTitle} — ${chap.objective}</p>

      <h2>1. 📖 La Leçon (Lesson & Grammar)</h2>
      <p>${chap.lesson.introduction}</p>

      ${chap.lesson.grammarRules.map(rule => `
        <div style="background-color: #f8fafc; border: 1pt solid #e2e8f0; padding: 10pt; margin: 8pt 0;">
          <h3 style="margin-top: 0; color: #0284c7;">${rule.title}</h3>
          <p><strong>Règle :</strong> ${rule.summary}</p>
          <ul>
            ${rule.rulePoints.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
          ${rule.tips ? `<p style="color: #b45309;">💡 <em>${rule.tips}</em></p>` : ''}
          ${rule.tableData ? `
            <table>
              <thead>
                <tr>
                  ${rule.tableData.headers.map(h => `<th>${h}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${rule.tableData.rows.map(row => `
                  <tr>
                    ${row.map(cell => `<td>${cell}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          ` : ''}
        </div>
      `).join('')}

      <div class="teacher-note">
        <strong>📝 Note du Maître / Teacher's Advice :</strong><br/>
        ${chap.lesson.teacherNote.advice}<br/>
        ${chap.lesson.teacherNote.commonMistake ? `<em>Erreur fréquente à éviter : ${chap.lesson.teacherNote.commonMistake}</em><br/>` : ''}
        ${chap.lesson.teacherNote.classroomActivity ? `<strong>Activité recommandée :</strong> ${chap.lesson.teacherNote.classroomActivity}` : ''}
      </div>

      <div class="culture-box">
        <strong>🇫🇷 Le Saviez-vous ? (${chap.lesson.culturalInsight.title}) :</strong><br/>
        ${chap.lesson.culturalInsight.fact}
      </div>

      <h2>2. 📚 Boîte à Vocabulaire (Vocabulary Box)</h2>
      <table>
        <thead>
          <tr>
            <th>Mot français</th>
            <th>Phonétique</th>
            <th>Anglais</th>
            <th>Phrase exemple</th>
          </tr>
        </thead>
        <tbody>
          ${chap.lesson.vocabularyBox.map(v => `
            <tr>
              <td><strong>${v.french}</strong></td>
              <td>${v.phonetic}</td>
              <td>${v.english}</td>
              <td>${v.exampleSentence ?? ''}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <h2>3. 🗣️ Prononciation & Sons Clés</h2>
      <p><strong>Son à l'honneur :</strong> ${chap.pronunciation.focusSound}</p>
      <p><em>Règle d'élocution :</em> ${chap.pronunciation.soundRule}</p>
      ${chap.pronunciation.tongueTwister ? `
        <p style="background: #fffbeb; padding: 8pt; border-left: 3pt solid #f59e0b;">
          <strong>Virelangue amusant :</strong> ${chap.pronunciation.tongueTwister.french}<br/>
          <small>(${chap.pronunciation.tongueTwister.english})</small>
        </p>
      ` : ''}

      <h2>4. ✏️ Exemples & Dialogues en Situation</h2>
      ${chap.examples.dialogues.map(d => `
        <div class="dialogue-box">
          <strong>${d.speaker} :</strong> « ${d.french} »<br/>
          <span style="color: #64748b; font-size: 10pt;">(${d.english})</span>
        </div>
      `).join('')}

      <h2>5. 📝 Exercices d'Application (À faire sur le cahier)</h2>
      ${chap.exercises.map((ex, idx) => `
        <div class="exercise-item">
          <strong>Exercice ${idx + 1} :</strong> ${ex.prompt}<br/>
          ${ex.options ? `<p>Options : ${ex.options.join('  ·  ')}</p>` : ''}
          ${ex.pairs ? `<p>Paires à relier : ${ex.pairs.map(p => `${p.french} ➔ ${p.english}`).join(', ')}</p>` : ''}
          <div class="dotted-line">Réponse : </div>
        </div>
      `).join('')}

      <h2>6. 🎯 Fiche de Révision Express</h2>
      <ul>
        ${chap.revision.summaryList.map(item => `<li>${item}</li>`).join('')}
      </ul>

      <h2>7. ✅ Évaluation Sommative (Test)</h2>
      <p><strong>${chap.test.title}</strong> (Score cible : ${chap.test.passScore}/${chap.test.questions.length})</p>
      ${chap.test.questions.map((q, idx) => `
        <div class="exercise-item">
          <p><strong>Question ${idx + 1} :</strong> ${q.question}</p>
          <p>Choix : ${q.options.map((opt, i) => `[  ] ${opt}`).join(' &nbsp;&nbsp; ')}</p>
          <div class="dotted-line">Ma réponse : </div>
        </div>
      `).join('')}

      <div class="answer-key">
        <h3 style="margin-top: 0; color: #7e22ce;">Corrigé & Conseils du Maître (Teacher's Answer Key)</h3>
        <p><strong>Réponses aux exercices :</strong> ${chap.exercises.map((e, i) => `Ex ${i+1}: ${Array.isArray(e.correctAnswer) ? e.correctAnswer.join(', ') : e.correctAnswer}`).join(' | ')}</p>
        <p><strong>Réponses au test :</strong> ${chap.test.questions.map((q, i) => `Q${i+1}: ${q.correctAnswer}`).join(' | ')}</p>
        <p><em>${chap.test.teacherAnswerKeyNotes}</em></p>
      </div>

      <div class="page-break"></div>
    </div>
  `).join('')}
</body>
</html>
  `;

  const blob = new Blob(['\ufeff', htmlContent], {
    type: 'application/msword;charset=utf-8'
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const fileName = allChapters 
    ? 'Mon_Manuel_de_Francais_Grade2_Complet.doc' 
    : `Manuel_Francais_Ch${selectedChapter?.id ?? 1}_${selectedChapter?.slug ?? 'chapitre'}.doc`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function triggerPrintTextbook(): void {
  window.print();
}
