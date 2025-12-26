"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { HorizontalScrollGallery } from "@/components/horizontal-scroll-gallery";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";
import Link from "next/link";

const exhibitDetails: Record<
  string,
  {
    title: string;
    description: string;
    fullDescription: string;
    heroImage: string;
    sections: Array<{
      title: string;
      content: string;
      image: string;
      slug: string;
    }>;
    gallery: Array<{
      image: string;
      title: string;
    }>;
    summary?: string;
  }
> = {
  "ca-dao": {
    title: "Ca dao của người Jrai",
    description: "Vẻ đẹp mộc mạc, sâu sắc trong lời ca dân gian của người Jrai",
    fullDescription:
      "Ca dao của người Jrai phản ánh triết lý sống, kinh nghiệm lao động và tình cảm giữa con người với thiên nhiên hùng vĩ. Những câu ca truyền miệng qua bao thế hệ vừa giản dị, vừa chứa đựng chiều sâu nhân văn, thể hiện tâm hồn và bản sắc văn hóa độc đáo của dân tộc Jrai.",
    heroImage: "/images/tho.jpg",
    sections: [
      {
        title: "Ca dao về gia đình",
        content: `Ca dao Jrai về gia đình thường nhấn mạnh lòng biết ơn cha mẹ và giá trị của lao động. Ví dụ như câu:<br/><br/>
        <div style="display: grid;gap: 1rem;grid-template-columns: 1fr 1fr;">
          <div>
          'Po tao nai ami<br/>
Po tao nao ama<br/>
H' dong nai h' dong kha<br/>
Bơ nai bơr miêng'
          </div>
          <div>
          (Cây lúa của mẹ<br/>
Cây lúa của cha<br/>
Ruộng đồng là ruộng quý<br/>
Cỏ cây là quà thiên nhiên) 
          </div>
        </div>
        <br/>
         Thể hiện sự trân trọng công lao của đấng sinh thành và ý thức gìn giữ truyền thống lao động.`,
        image: "/images/cadao/ca-dao-family.jpeg",
        slug: "ca-dao-gia-dinh",
      },
      {
        title: "Ca dao về kinh nghiệm sống",
        content: `Những câu ca như <br/><br/> 
          <div style="display: grid;gap: 1rem;grid-template-columns: 1fr 1fr;">
          <div>
          'Dleh Ngă hmă hmão pơdai <br/>
Dleh hiu dlai Kah hmâo hlâ<br/>
Dleh hiu mớdrô Kah hmào ngan.<br/>
Dleh tơgan ngã Kah hmão băng.<br/>
Dleh rơKông phat phai Kah posir Kơ đi.'
          </div>
          <div>
          (Siêng làm rẫy mới có lúa
<br/>
Siêng đi săn mới có thú
<br/>
Siêng làm ăn mới có của.
<br/>
Mỏi tay làm mới có
<br/>
Khô cổ bàn mới xong việc
) 
          </div>
        </div>
        <br/> Thể hiện triết lý lao động cần cù và tinh thần tôn trọng thành quả làm ra. Ca dao Jrai truyền dạy đạo lý tiết kiệm, siêng năng và biết ơn thiên nhiên.`,
        image: "/images/cadao/ca-dao-life.jpg",
        slug: "ca-dao-kinh-nghiem-song",
      },
      {
        title: "Ca dao dân gian & lễ hội",
        content:
          "Các bài ca dân gian mô tả sinh hoạt và lễ hội cồng chiêng, phản ánh nhịp sống buôn làng và niềm vui lao động. Ví dụ: 'Gơ sang chiêng pơ hlâm, pơ sang hlâm pơ ting' – cồng vang xa, chiêng gọi gần – miêu tả không khí rộn ràng của ngày hội Jrai.",
        image: "/images/cadao/ca-dao-festival.jpg",
        slug: "ca-dao-dan-gian",
      },
      {
        title: "Ca dao về thiên nhiên",
        content:
          "Người Jrai xem thiên nhiên là bạn đồng hành. Những câu ca như 'Ai yang ai tơng ia, ai tơng ia ai yang' (Nước nuôi cây, cây giữ nước) thể hiện mối quan hệ hài hòa giữa con người và môi trường – một triết lý sống xanh, bền vững từ bao đời.",
        image: "/images/cadao/ca-dao-nature.jpg",
        slug: "ca-dao-thien-nhien",
      },
      {
        title: "Ca dao về tình yêu đôi lứa",
        content:
          "Ca dao tình yêu của người Jrai thường mộc mạc nhưng sâu lắng, ca ngợi sự thủy chung và son sắt. Những lời ca kể về tình yêu xa cách, nỗi nhớ và niềm tin gặp lại, phản ánh vẻ đẹp trong sáng, chân thành của tâm hồn Jrai.",
        image: "/images/cadao/ca-dao-love.jpg",
        slug: "ca-dao-tinh-yeu-doi-lua",
      },
    ],
    summary: `Người Jrai có những bài ca dao mang đậm nét đặc trưng văn hóa của mình và thường thể hiện tình yêu thương đất nước thiên nhiên và những bài học trong cuộc sống mà ông cha ta truyền lại.
<br/>
    Bài ca dao không chỉ mang lại giá trị văn học mà còn góp phần bảo tồn bản sắc văn hóa độc đáo của người Jrai trên mảnh đất Gia Lai.`,
    gallery: [
      { image: "/ca-dao-family.jpg", title: "Ca dao về gia đình" },
      { image: "/ca-dao-life.jpg", title: "Ca dao về kinh nghiệm sống" },
      { image: "/ca-dao-festival.jpg", title: "Ca dao dân gian & lễ hội" },
      { image: "/ca-dao-nature.jpg", title: "Ca dao về thiên nhiên" },
      { image: "/ca-dao-love.jpg", title: "Ca dao về tình yêu đôi lứa" },
    ],
  },
  "tuc-ngu": {
    title: "Tục ngữ của người Jrai",
    description:
      "Những câu nói ngắn gọn, giàu hình ảnh, chứa đựng triết lý sống và kinh nghiệm ứng xử của người Jrai.",
    fullDescription:
      "Tục ngữ Jrai là kho tàng tri thức dân gian quý giá, phản ánh thế giới quan, nhân sinh quan và mối quan hệ hài hòa giữa con người với thiên nhiên. Dưới đây là một số nhóm tục ngữ tiêu biểu được sưu tầm và lưu giữ.",
    heroImage: "/images/tucngu.jpg",
    sections: [
      {
        title: "Tục ngữ về gia đình",
        content: `
      <div>
        1. “Ama ia, ama hluh”<br/>
        <i>Dịch:</i> Nước là cha, lửa là cha.<br/><br/>
        2. “Agong dơi dơi alinh lẽ ngăn”<br/>
        <i>Dịch:</i> Anh em như thể tay chân.<br/>
        <i>Ý nghĩa:</i> Thể hiện tinh thần đoàn kết, gắn bó giữa anh em ruột thịt trong gia đình.
      </div>
      `,
        image: "/images/tucngu/family-jrai.jpg",
        slug: "tuc-ngu-ve-gia-dinh",
      },
      {
        title: "Tục ngữ về kinh nghiệm sống",
        content: `
      <div>
        1. “Ngã dleh, rơ beh bong”<br/>
        <i>Dịch:</i> Làm mệt mới có ăn.<br/>
        <i>Ý nghĩa:</i> Đề cao lao động, tinh thần tự lập và siêng năng.<br/><br/>
        
        2. “Mã tơn gan apan drơi”<br/>
        <i>Dịch:</i> Tay bắt mặt mừng.<br/>
        <i>Ý nghĩa:</i> Nói về niềm vui khi gặp lại người thân quen sau thời gian xa cách.<br/><br/>
        
        3. “Kơ yây anet nhu guen tơ pă”<br/>
        <i>Dịch:</i> Cây bé uốn thẳng.<br/>
        <i>Ý nghĩa:</i> Dạy con từ thuở còn thơ, như cây non cần được uốn nắn để lớn lên ngay thẳng.<br/><br/>
        
        4. “Hrơi hngoan siu ia – Hrơi hoai siu tang”<br/>
        <i>Dịch:</i> Mang nước trong lòng đất, mọi sự sống đều từ đất mà ra.<br/>
        <i>Ý nghĩa:</i> Ca ngợi đất đai, nguồn cội và giá trị của thiên nhiên.
      </div>
      `,
        image: "/images/tucngu/life-jrai.jpg",
        slug: "tuc-ngu-ve-kinh-nghiem-song",
      },
      {
        title: "Tục ngữ dân gian",
        content: `
      <div>
        1. “Hlang ia tơ đeh, h’lang pơ tao kơ niê”<br/>
        <i>Dịch:</i> Suối có nguồn, làng có chủ.<br/><br/>
        
        2. “Kon chim mầu, gu mạ nui mâu plơi”<br/>
        <i>Dịch:</i> Chim có tổ, con người có làng.<br/><br/>
        
        3. “Amania a nai, ama phă ia pơm”<br/>
        <i>Ý nghĩa:</i> Biết trân trọng nguồn nước và đất đai – nền tảng của sự sống và sinh tồn.
      </div>
      `,
        image: "/images/tucngu/folk-jrai.jpg",
        slug: "tuc-ngu-dan-gian",
      },
    ],
    gallery: [
      { image: "/images/family-jrai.jpg", title: "Tục ngữ về gia đình" },
      { image: "/images/life-jrai.jpg", title: "Tục ngữ về kinh nghiệm sống" },
      { image: "/images/folk-jrai.jpg", title: "Tục ngữ dân gian" },
      { image: "/images/jrai-culture.jpg", title: "Văn hóa Jrai" },
    ],
    summary: `Tục ngữ của người Gia Rai thường phản ánh kinh nghiệm sống triết lý ứng xử và mối quan hệ của họ với thiên nhiên xã hội
<br/>
Bài tục ngữ không chỉ mang lại giá trị văn học mà còn góp phần bảo tồn bản sắc văn hóa độc đáo của người Gia Rai trên mảnh đất Gia Lai.
`,
  },
  "truyen-dan-gian": {
    title: "Truyện dân gian của người Jrai",
    description:
      "Những câu chuyện truyền miệng qua nhiều thế hệ, phản ánh thế giới quan, niềm tin và trí tưởng tượng phong phú của người Jrai.",
    fullDescription:
      "Truyện dân gian của người Jrai thường mang đậm màu sắc huyền ảo, chứa đựng yếu tố thần thoại, siêu nhiên, nhưng vẫn phản ánh sâu sắc đạo đức, triết lý sống và tình cảm con người. Các câu chuyện được lưu truyền qua lời kể, là một phần quan trọng trong việc bảo tồn bản sắc văn hóa Jrai.",
    heroImage: "/images/truyeb.jpg",
    sections: [
      {
        title: "Giới thiệu chung",
        content: `
      Các thể loại truyện dân gian của người Jrai được biết đến với phong cách mộc mạc, gần gũi nhưng sâu sắc và giàu tính nhân văn.<br/><br/>
      Những câu chuyện này thường mang yếu tố kỳ ảo, thần thoại, phép thuật — phản ánh niềm tin của con người về thế giới tự nhiên và sức mạnh của các vị thần.<br/><br/>
      Truyện dân gian Jrai bao gồm nhiều thể loại như:<br/>
      - Truyện cổ tích<br/>
      - Truyện truyền thuyết<br/>
      - Sự tích<br/>
      `,
        image: "/images/truyen/jrai-forest.jpg",
        slug: "",
      },
      {
        title: "Truyện cổ tích",
        content: `
      <div id="storyGrid" style="
            gap: 40px;
display:grid;
    max-width: 1440px;
    margin: 0 auto;
  ">
    <!-- 1 -->
    <div style="background: #fff; border-radius: 18px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
      <h3 style="font-size: 20px; color: #7c4d00; margin-bottom: 15px;">1. Cây nêu và con ma đói</h3>
      <img src="/images/truyen/cay-neiu.jpg" alt="Cây nêu và con ma đói" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
      <p style="font-size: 15px; line-height: 1.6; color:black">
        Ngày xưa, dân làng bị con ma đói quấy phá. Già làng yêu cầu mọi người dựng cây nêu trước nhà, treo lá cây và ống tre tạo tiếng động khiến con ma tưởng là thần linh bảo vệ nên bỏ đi. Từ đó phong tục dựng cây nêu vẫn được giữ đến nay.
      </p>
      <a href="truyen-dan-gian/cay-neu-va-con-ma-doi" style="font-weight:600; margin-top:12px; display:inline-block">Xem thêm</a>
    </div>

    <!-- 2 -->
    <div style="background: #fff; border-radius: 18px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
      <h3 style="font-size: 20px; color: #7c4d00; margin-bottom: 15px;">2. Chàng trai và cồng chiêng thần</h3>
      <img src="/images/truyen/cong-chieng.jpg" alt="Chàng trai và cồng chiêng thần" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
      <p style="font-size: 15px; line-height: 1.6; color:black">
        Một chàng trai nghèo được thần ban cho chiếc cồng chiêng kỳ diệu. Âm thanh của nó mang lại mùa màng bội thu, nhưng vì lòng kiêu ngạo, chàng bị thần thu lại. Câu chuyện dạy con người sự khiêm nhường và tôn trọng điều thiêng liêng.
      </p>
            <a href="truyen-dan-gian/chang-trai-va-cong-chieng-than" style="font-weight:600; margin-top:12px; display:inline-block">Xem thêm</a>

    </div>

    <!-- 3 -->
    <div style="background: #fff; border-radius: 18px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
      <h3 style="font-size: 20px; color: #7c4d00; margin-bottom: 15px;">3. Di ông lấy Nữ thần Mặt Trời</h3>
      <img src="/images/truyen/mat-troi.jpg" alt="Di ông lấy Nữ thần Mặt Trời" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
      <p style="font-size: 15px; line-height: 1.6; color:black">
        Di ông – chàng trai dũng cảm – vượt qua nhiều thử thách để cưới Nữ thần Mặt Trời. Câu chuyện ca ngợi lòng kiên trì, trí thông minh và khát vọng vươn tới ánh sáng — biểu tượng cho niềm tin và tình yêu mãnh liệt.
      </p>
            <a href="truyen-dan-gian/truyen-dan-gian-di-ong" style="font-weight:600; margin-top:12px; display:inline-block">Xem thêm</a>

    </div>

    <!-- 4 -->
    <div style="background: #fff; border-radius: 18px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
      <h3 style="font-size: 20px; color: #7c4d00; margin-bottom: 15px;">4. Đăm Dong đánh thần Sét</h3>
      <img src="/images/truyen/dam-dong.jpg" alt="Đăm Dong đánh thần Sét" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
      <p style="font-size: 15px; line-height: 1.6; color:black">
        Khi dân làng bị thần Sét gây hại, chàng trai Đăm Dong dũng cảm chiến đấu để bảo vệ buôn làng. Câu chuyện tôn vinh lòng dũng cảm, tinh thần đoàn kết và niềm tin con người có thể vượt qua thiên nhiên.
      </p>
            <a href="truyen-dan-gian/truyen-dan-gian-dam-dong" style="font-weight:600; margin-top:12px; display:inline-block">Xem thêm</a>

    </div>

    <!-- 5 -->
    <div style="background: #fff; border-radius: 18px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
      <h3 style="font-size: 20px; color: #7c4d00; margin-bottom: 15px;">5. Cây nêu thần</h3>
      <img src="/images/truyen/cay-neu-than.jpg" alt="Cây nêu thần" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
      <p style="font-size: 15px; line-height: 1.6; color:black">
        Hai vợ chồng nghèo được thần núi ban cây nêu thần – chỉ cần khấn, cây sẽ ban thức ăn. Nhưng người hàng xóm tham lam ăn trộm cây và bị trừng phạt. Câu chuyện thể hiện đạo lý “ở hiền gặp lành”, phê phán lòng tham.
      </p>
            <a href="truyen-dan-gian/truyen-dan-gian-cay-neu-than" style="font-weight:600; margin-top:12px; display:inline-block">Xem thêm</a>

    </div>

    <!-- 6 -->
    <div style="background: #fff; border-radius: 18px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
      <h3 style="font-size: 20px; color: #7c4d00; margin-bottom: 15px;">6. Voi thần</h3>
      <img src="/images/truyen/voi-than.png" alt="Voi thần" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
      <p style="font-size: 15px; line-height: 1.6; color:black">
        Trong rừng sâu có voi thần bảo vệ dân làng khỏi thú dữ. Khi voi biến mất, dân dựng tượng voi để tưởng nhớ. Câu chuyện thể hiện lòng tôn kính thiên nhiên và niềm tin vào linh hồn bảo hộ của buôn làng.
      </p>
            <a href="truyen-dan-gian/truyen-dan-gian-voi-than" style="font-weight:600; margin-top:12px; display:inline-block">Xem thêm</a>

    </div>
  </div>
      `,
        image: "/images/truyen/jrai-tale.jpg",
        slug: "",
      },
      {
        title: "Truyện truyền thuyết",
        content: `
      <div>
        <b>Truyền thuyết “Hoa dã quỳ”</b><br/>
        Chuyện kể về nàng H’Linh và chàng K’Lang yêu nhau say đắm. Vì ghen tuông, con trai tộc trưởng đã bắn chết họ. Nơi hai người ngã xuống mọc lên loài hoa vàng rực rỡ – hoa dã quỳ. Câu chuyện ca ngợi tình yêu chung thủy, vượt qua ranh giới sinh tử.<br/><br/>
        <i>Ý nghĩa:</i> Biểu tượng của tình yêu vĩnh cửu và lòng trung thành trong văn hóa Jrai.

            <a href="truyen-dan-gian/truyen-thuyet-hoa-da-quy" style="font-weight:600; margin-top:12px; display:block">Xem thêm</a>

      </div>
      `,
        image: "/images/truyen/danquy.jpeg",
        slug: "",
      },
      {
        title: "Sự tích núi Chư Đăng Ya",
        content: `
      <div>
        Núi Chư Đăng Ya (huyện Mang Yang, Gia Lai) được kể là nơi diễn ra cuộc chiến giữa anh hùng K’Đu và con rồng độc ác gây hạn hán, lũ lụt. Sau nhiều ngày chiến đấu dữ dội, K’Đu chiến thắng, chôn vùi con rồng dưới đất. Từ đó, ngọn núi hình thành – đỉnh núi giống đầu rồng, còn dung nham hóa thành suối nước nóng.<br/><br/>
        <i>Ý nghĩa:</i> Tôn vinh tinh thần dũng cảm, lòng nhân nghĩa và niềm tin con người có thể điều hòa thiên nhiên.<br/>

            <a href="truyen-dan-gian/su-tich-nui-chu-dang-ya" style="font-weight:600; margin-top:12px; display:block">Xem thêm</a>
        
      </div>
      `,
        image: "/images/truyen/chudangya.jpg",
        slug: "",
      },
    ],
    gallery: [
      { image: "/images/jrai-tale.jpg", title: "Cây nêu và con ma đói" },
      { image: "/images/danquy.jpg", title: "Truyền thuyết hoa dã quỳ" },
      { image: "/images/chudangya.jpg", title: "Sự tích núi Chư Đăng Ya" },
      { image: "/images/jrai-culture-2.jpg", title: "Văn hóa dân gian Jrai" },
    ],
    summary: `
    Truyện dân gian của người Jrai phản ánh đời sống, tín ngưỡng, phong tục và cách con người lý giải thế giới tự nhiên.<br/><br/>
      Nhiều câu chuyện gắn liền với các lễ hội, nghi lễ và sự tích địa danh như Chư Đăng Ya, cây nêu thần, cồng chiêng thần,...<br/><br/>
      Dù mang yếu tố kỳ ảo, truyện vẫn truyền tải bài học đạo đức sâu sắc: lòng nhân hậu, tinh thần đoàn kết, sự dũng cảm và niềm tin vào sức mạnh của con người.<br/><br/>
      Đây là di sản tinh thần quý báu, góp phần bảo tồn bản sắc văn hóa độc đáo của người Jrai trên cao nguyên Gia Lai.<br/>
  Truyện dân gian của người Jrai là kho tàng tri thức dân gian chứa đựng niềm tin, trí tưởng tượng và triết lý sống của cộng đồng.
  <br/><br/>
  Thông qua các câu chuyện về anh hùng, thần linh và tình yêu, người Jrai thể hiện khát vọng sống hòa hợp với thiên nhiên và tôn vinh giá trị con người.
  `,
  },
};

export default function ExhibitDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const exhibit = exhibitDetails[slug];

  if (!exhibit) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-white/60">Exhibit not found</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section with PageHero Component */}
        <PageHero
          title={exhibit.title}
          description={exhibit.fullDescription}
          backgroundImage={exhibit.heroImage}
          minHeight="min-h-[70vh]"
        />

        {/* Main Content Sections */}
        <section
          id="content"
          className="px-6 md:px-10 py-20 max-w-[1440px] mx-auto"
        >
          <motion.div
            className="space-y-32"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {exhibit.sections.map((section, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div key={index} variants={staggerItemVariants}>
                  <SectionHeader
                    number={String(index + 1).padStart(2, "0")}
                    title={section.title}
                  />

                  <div
                    className={`grid ${section.title === "Truyện cổ tích"
                        ? "md:grid-cols-1"
                        : "md:grid-cols-2"
                      } gap-16 items-center`}
                  >
                    {/* Content Left / Image Right */}
                    {isEven ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <p
                            className="text-lg text-foreground leading-relaxed mb-8"
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                          />
                          {section.slug && (
                            <Link
                              href={`${slug}/${section.slug}`}
                              className="inline-flex items-center gap-3 text-gold font-semibold hover:gap-5 transition-all"
                            >
                              Tìm hiểu thêm →
                            </Link>
                          )}
                        </motion.div>

                        <motion.div
                          className="relative h-96 rounded-lg overflow-hidden group"
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <img
                            src={section.image || "/placeholder.svg"}
                            alt={section.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <motion.div
                              className="w-16 h-16 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                            >
                              <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                            </motion.div>
                          </div>
                        </motion.div>
                      </>
                    ) : (
                      /* Image Left / Content Right */
                      <>
                        <motion.div
                          className="relative h-96 rounded-lg overflow-hidden group"
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <img
                            src={section.image || "/placeholder.svg"}
                            alt={section.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <motion.div
                              className="w-16 h-16 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                            >
                              <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                            </motion.div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <p
                            className="text-lg text-foreground leading-relaxed mb-8"
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                          />
                          {section.slug && (
                            <Link
                              href={`${slug}/${section.slug}`}
                              className="inline-flex items-center gap-3 text-gold font-semibold hover:gap-5 transition-all"
                            >
                              Tìm hiểu thêm →
                            </Link>
                          )}
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <SectionHeader
            number="04"
            title="Gallery"
            subtitle="Explore our complete collection"
          />
          <HorizontalScrollGallery items={exhibit.gallery} />
        </section> */}

        <section className="px-8 md:px-16 py-32 max-w-[1440px] mx-auto border-t border-white/10">
          <SectionHeader title="Tổng kết" />

          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p
              className="text-foreground text-xl mt-2"
              dangerouslySetInnerHTML={{
                __html: exhibit.summary ?? "",
              }}
            ></p>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}
