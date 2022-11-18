const PDFMerger=require('pdf-merger-js');

var merger=new PDFMerger();

const mergepdf=async (p1,p2)=>{
    await merger.add(p1);
    await merger.add(p2);

    await merger.save("public/merge.pdf");
}
module.exports={mergepdf}
