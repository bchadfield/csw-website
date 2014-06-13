module Jekyll
  class HelpCategoriesGenerator < Generator
    def generate(site)
      site.config['help_categories'] = page_key_hash(site, 'help_category')

      if site.layouts.key? 'help_category_index'
        dir = site.config['help_category_dir'] || 'help'
        site.config['help_categories'].each do |help_category|
          site.pages << HelpCategoryPage.new(site, site.source, File.join(dir, help_category[0].downcase.gsub(' ', '-')), help_category[0])
        end
      end
    end

    def page_key_hash(site, page_key)
      hash = Hash.new { |hsh, key| hsh[key] = Array.new }
      site.pages.each do |page|
        if page.data.has_key? page_key
          key = page.data[page_key]
          hash[key] << page
        end
      end
      hash
    end
  end

  class HelpCategoryPage < Page
    def initialize(site, base, dir, help_category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'help_category_index.html')
      self.data['help_category'] = help_category

      help_category_title_prefix = site.config['help_category_title_prefix'] || 'Help'
      self.data['title'] = "#{help_category} | #{help_category_title_prefix}"
    end
  end
end