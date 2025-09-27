"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";


function sampleJson() {
  return JSON.stringify(
    {
      name: "Ada Lovelace",
      role: "Mathematician",
      skills: ["analysis", "programming", "logic"],
      active: true,
      details: { born: 1815, notable: "First computer programmer" },
    },
    null,
    2,
  )
}

function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(()=>{
    if(!window) return;

    const data = localStorage.getItem("inputJSON");
    if(!data) return;
    setInput(data);
  }, [])

  const handleFormat = () => {
    if (!input.trim()) {
      toast.info("Please paste JSON to format.", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
      return
    }
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
      localStorage.setItem("inputJSON", input)
      toast.success("Formatted JSON", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
    } catch (error) {
      toast.error("Invalid JSON. Please fix syntax and try again.", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
    }
  }

  const handleMinify = () => {
    if (!input.trim()) {
      toast.info("Please paste JSON to minify.", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
      return
    }
    try {
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
       localStorage.setItem("inputJSON", input)
      toast.success("Minified JSON", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
    } catch (error) {
      toast.error("Invalid JSON. Please fix syntax and try again.", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
    }
  }

  const handleCopy = async () => {
    if (!output) {
      toast.info("Nothing to copy yet.", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
      return;
    }
    try {
      await navigator.clipboard.writeText(output)
      toast.success("Copied to clipboard", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
     localStorage.setItem("inputJSON", input)
    } catch {
      toast.error("Unable to copy", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
    }
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
    toast.message("Cleared", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
     localStorage.removeItem("inputJSON")
  }

  const handleSample = () => {
    const s = sampleJson()
    setInput(s)
    setOutput("")
    toast.message("Sample loaded. Click Format or Minify.", {
      duration: 2000,
      style: {
        color: "white",
        backgroundColor: "black"
      }
    })
  }

  return (
    <section className=" text-white mx-auto p-6">
      <Card className="border">
        <CardHeader>
          <CardTitle className="text-balance">JSON Formatter</CardTitle>
          <CardDescription className="text-pretty">Prettify, minify, copy, and validate JSON quickly.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button onClick={handleFormat}>Format</Button>
            <Button variant="secondary" onClick={handleMinify}>
              Minify
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="outline" onClick={handleCopy} disabled={!output}>
              Copy Output
            </Button>
            <Button variant="ghost" onClick={handleSample}>
              Load Sample
            </Button>
            <Button variant="destructive" onClick={handleClear}>
              Clear
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="input" className="text-sm font-medium">
                Input JSON
              </label>
              <Textarea
                id="input"
                placeholder="Paste your JSON here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="h-72 example md:h-[28rem] overflow-y-scroll font-mono text-sm"
                aria-label="Input JSON"
              />
              <p className="text-xs text-muted-foreground">
                Tip: Use Format for pretty printing or Minify for a compact single line.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Output</label>
              <div className="rounded-md border bg-card">
                <ScrollArea className="h-72 md:h-[28rem]">
                  <pre className="m-0 whitespace-pre-wrap font-mono text-sm px-3 py-3 text-card-foreground">
                    {output || "Formatted JSON will appear here..."}
                  </pre>
                </ScrollArea>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
export default JSONFormatter