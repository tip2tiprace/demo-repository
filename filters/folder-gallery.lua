local image_extensions = {
  jpg = true, jpeg = true, png = true, webp = true,
  gif = true, avif = true
}

function Div(div)
  if not div.classes:includes("folder-gallery") then
    return nil
  end

  local folder = div.attributes["data-folder"]
  if not folder or folder == "" then
    error("A folder-gallery must specify data-folder.")
  end

  local files = pandoc.system.list_directory(folder)
  table.sort(files)
  local photos = {}

  for _, name in ipairs(files) do
    local extension = name:match("%.([^%.]+)$")
    if extension and image_extensions[extension:lower()] then
      local caption = name:gsub("%.[^%.]+$", ""):gsub("[_%-]+", " ")
      local image = pandoc.Image(
        {pandoc.Str("Race photo: " .. caption)},
        folder .. "/" .. name,
        "",
        pandoc.Attr("", {"lightbox"}, {
          loading = "lazy",
          decoding = "async",
          group = "tip2tip-gallery"
        })
      )
      photos[#photos + 1] = pandoc.Div(
        {pandoc.Plain({image})},
        pandoc.Attr("", {"race-photo"})
      )
    end
  end

  if #photos == 0 then
    return pandoc.Para({pandoc.Str("Race photos coming soon.")})
  end

  return pandoc.Div(photos, pandoc.Attr("", {"race-photo-strip"}, {
    role = "region",
    ["aria-label"] = "Race photo gallery. Scroll sideways to browse photos.",
    tabindex = "0"
  }))
end
