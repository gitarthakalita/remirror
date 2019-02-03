declare module 'prosemirror-test-builder' {
  import { Node as ProsemirrorNode, Schema } from 'prosemirror-model';

  export interface NodeTypeAttributes extends Record<string, any> {
    nodeType: string;
  }

  export interface MarkTypeAttributes extends Record<string, any> {
    markType: string;
  }

  export interface TaggedFlatObject<S extends Schema = any> {
    tag: Record<string, number>;
    flat: Array<TaggedProsemirrorNode<S> | TaggedFlatObject<S>>;
  }

  export interface TaggedProsemirrorNode<S extends Schema = any>
    extends TaggedFlatObject<S>,
      ProsemirrorNode {}

  type TestNodesUnion =
    | 'p'
    | 'pre'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'li'
    | 'ul'
    | 'ol'
    | 'br'
    | 'img'
    | 'hr'
    | 'ordered_list'
    | 'bullet_list'
    | 'list_item'
    | 'doc'
    | 'paragraph'
    | 'blockquote'
    | 'horizontal_rule'
    | 'heading'
    | 'code_block'
    | 'text'
    | 'image'
    | 'hard_break';
  type TestMarksUnion = 'a' | 'link' | 'em' | 'strong' | 'code';

  export type TestSchema = Schema<TestNodesUnion, TestMarksUnion>;

  type Args = Array<string | TaggedProsemirrorNode | TaggedFlatObject>;

  type NodeBuilderMethod<S extends Schema = any> = (...args: Args) => TaggedProsemirrorNode<S>;

  type MarkBuilderMethod<S extends Schema = any> = (...args: Args) => TaggedFlatObject<S>;

  export interface EqMethod {
    eq(param: EqMethod): boolean;
  }

  export type Builder = <
    Obj extends Record<string, NodeTypeAttributes | MarkTypeAttributes> = Record<
      string,
      NodeTypeAttributes | MarkTypeAttributes
    >,
    N extends string = string,
    M extends string = string
  >(
    testSchema: Schema<N, M>,
    names: Obj,
  ) => Record<N, NodeBuilderMethod<Schema<N, M>>> &
    Record<M, MarkBuilderMethod<Schema<N, M>>> &
    {
      [P in keyof Obj]: Obj[P] extends NodeTypeAttributes
        ? NodeBuilderMethod<Schema<N, M>>
        : MarkBuilderMethod<Schema<N, M>>
    };

  export interface ProsemirrorTestBuilder {
    schema: TestSchema;
    builders: Builder;
    eq(a: EqMethod, b: EqMethod): boolean;
    p: NodeBuilderMethod<TestSchema>;
    pre: NodeBuilderMethod<TestSchema>;
    h1: NodeBuilderMethod<TestSchema>;
    h2: NodeBuilderMethod<TestSchema>;
    h3: NodeBuilderMethod<TestSchema>;
    li: NodeBuilderMethod<TestSchema>;
    ul: NodeBuilderMethod<TestSchema>;
    ol: NodeBuilderMethod<TestSchema>;
    br: NodeBuilderMethod<TestSchema>;
    img: NodeBuilderMethod<TestSchema>;
    hr: NodeBuilderMethod<TestSchema>;
    a: MarkBuilderMethod<TestSchema>;

    // From schema list
    ordered_list: NodeBuilderMethod<TestSchema>;
    bullet_list: NodeBuilderMethod<TestSchema>;
    list_item: NodeBuilderMethod<TestSchema>;
    doc: NodeBuilderMethod<TestSchema>;

    // From schema basic
    paragraph: NodeBuilderMethod<TestSchema>;
    blockquote: NodeBuilderMethod<TestSchema>;
    horizontal_rule: NodeBuilderMethod<TestSchema>;
    heading: NodeBuilderMethod<TestSchema>;
    code_block: NodeBuilderMethod<TestSchema>;
    text: NodeBuilderMethod<TestSchema>;
    image: NodeBuilderMethod<TestSchema>;
    hard_break: NodeBuilderMethod<TestSchema>;
    link: MarkBuilderMethod<TestSchema>;
    em: MarkBuilderMethod<TestSchema>;
    strong: MarkBuilderMethod<TestSchema>;
    code: MarkBuilderMethod<TestSchema>;
  }

  declare const prosemirrorTestBuilder: ProsemirrorTestBuilder;

  export default prosemirrorTestBuilder;
}
