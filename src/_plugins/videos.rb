require 'redcarpet'

class Redcarpet::Render::HTML
    def image(link, title, alt_text)
        if link.include? ".gif"
            return "<video autoplay loop muted playsinline>"\
                   "    <source src=\"#{link.sub(".gif", ".webm")}\" type=\"video/webm\">"\
                   "    <source src=\"#{link.sub(".gif", ".mp4")}\" type=\"video/mp4\">"\
                   "#{alt_text}"\
                   "</video>"
        else
            return "<img src=\"#{link}\" alt=\"#{alt_text}\" title=\"#{title}\">"
        end
    end
end