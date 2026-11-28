import { getTranslations } from 'next-intl/server';
import Container from '../../shared/container';
import { getCategories } from '../../requests/productRequests';
import { getCategoryKey } from '../../utils/categoryKeys';
import { SectionId } from '../../types/enums/RoutPath';
import { Section, Title, List, Item } from './style';

export default async function CategorySection() {
  const t = await getTranslations('categorySection');
  const tCategories = await getTranslations('categories');

  let categories: string[];
  try {
    categories = await getCategories();
  } catch {
    return null; 
  }

  return (
    <Section id={SectionId.Categories} aria-labelledby="categories-title">
      <Container>
        <Title id="categories-title">{t('title')}</Title>
        <List>
          {categories.map((category) => {
            const key = getCategoryKey(category);
            return <Item key={category}>{key ? tCategories(key) : category}</Item>;
          })}
        </List>
      </Container>
    </Section>
  );
}