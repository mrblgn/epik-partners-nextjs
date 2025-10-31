import { createClient } from "@/utils/supabase/server";
import { cookies } from 'next/headers';
import { ArticleSlider } from "./articles-slider";

const ArticlesCases = async () => {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: articles } = await supabase
    .from("articles")
    .select("id, title, author, issueDate")
    .neq("isDeleted", true);

  return (
    <section className="index-third">
      <div className="articles_h3">
        <h3>Makaleler & Davalar</h3>
      </div>
      <div className="articles_Component">
        <ArticleSlider sliderData={articles} />
      </div>
    </section>
  );
};

export default ArticlesCases;
