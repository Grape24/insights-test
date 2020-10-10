const gProcess = {
    processId : '1dea5hgk',
    orderBy: 'ascending',
    status: 'open',
    insights: [{
        id: '4g3',
        data: 'במאורה באדמה גר לו הוביט. לא מאורה מגעילה, מרופשת וטחובה, מלאה שלשולים מתחפרים וריח בוץ וגם לא מאורה יבשה, חשופה וחולית שאין בה מקום לשבת או דבר לאכול: זאת היתה מאורת? הוביט, ומשמעות הדבר נוחות.',
        displayOrder: 1,
        status: 'published',
        permisions: {
            delete: false,
            edit: true
        },
        statistics: {
            publishedContributesCount: 8,
            publishedContributersPresent: 37
        }
    },{
        id: '46e',
        data: 'היתה לו דלת עגולה דמוית צוהר, צבועה ירוק, ובדיוק במרכזה ידית פליז צהובה ונוצצת. הדלת נפתחה אל פרוזדור דמוי מנהרה שצורתו כצינור: מנהרה נעימה מאד ומנטולת עשן, עם קירות מחופים ורצפה מכוסה שטיח, מצוידת בכסאות ממורקים ובהמוני מתלים לכובעים ומעילים ההוביט היה מכניס אורחים.',
        displayOrder: 2,
        status: 'published',
        permisions: {
            delete: false,
            edit: true
        },
        statistics: {
            publishedContributesCount: 2,
            publishedContributersPresent: 24
        }  
    },{
        id: '465kr',
        data: 'רוב הפרוזדור, כי אם לא כולו, התפתל למרחק רב לאורך צלע ״הגבעה״ כך כינו אותו בני המקום אשר התגוררו מילין רבים מסביב לה ודלתות קטנות ועגולות רבות נפתחו ממנו מצדו האחת ומצדו האחר.',
        displayOrder: 3,
        status: 'published',
        permisions: {
            delete: false,
            edit: true
        },
        statistics: {
            publishedContributesCount: 5,
            publishedContributersPresent: 27
        }
    }]
}


function query(){
    return Promise.resolve(gProcess);
}

function saveInsight(insightId, editedInsight){
    const insightIdx = gProcess.insights.findIndex(insight=> insight.id === insightId);
    gProcess.insights.splice(insightIdx, 1, editedInsight);

}

function getInsightById(id){
    const insight = gProcess.insights.find(insight=> insight.id === id);
    return Promise.resolve(insight);
}

export const processService = {
    query,
    saveInsight,
    getInsightById
}