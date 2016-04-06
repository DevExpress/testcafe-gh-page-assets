module ConvertMdLinksToHtml
    class Generator < Jekyll::Generator
        def generate(site)
            site.pages.each { |p| convert_links(site, p) }
        end
        def convert_links(site, page)
            page.content = page.content.gsub(/(\[[^\]]*\]\([^:\)]*)(index\.md)(#[^\)]*)?\)/, '\1\3)')
            page.content = page.content.gsub(/(\[[^\]]*\]\([^:\)]*)\.md(#[^\)]*)?\)/, '\1.html\2)')
        end
    end
end